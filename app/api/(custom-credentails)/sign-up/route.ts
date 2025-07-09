import { sendEmail } from "@/email-sender";
import { verifyEmailTemplate } from "@/email-sender/verification-email-template";
import { signup_schema } from "@/lib/zod-schema";
import { prisma } from "@/prisma";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import dns from "dns/promises";

async function isEmailDomainValid(email: string): Promise<boolean> {
  const domain = email.split("@")[1];
  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = signup_schema.safeParse(body);

  console.log("Resend API is ", process.env.RESEND_API_KEY);
  console.log("Resend domain is ", process.env.RESEND_VERIFIED_DOMAIN);

  if (!result.success) {
    const fieldErrors = Object.values(
      result.error.flatten().fieldErrors
    ).flat();
    return NextResponse.json(
      {
        data: {
          success: false,
          error: fieldErrors[0] || "Invalid input",
        },
      },
      {
        status: 401,
      }
    );
  }

  const { name, email, password } = result.data;
  const isDomainValid = await isEmailDomainValid(email);
  if (!isDomainValid) {
    return NextResponse.json(
      {
        data: {
          success: false,
          error: "Invalid email domain.",
        },
      },
      { status: 400 }
    );
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        {
          data: {
            success: false,
            error: "User Already Exist",
          },
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await hash(password, 10);
    const token = nanoid(32);
    const expiresAt = new Date(Date.now() + 1000 * 60 * 15);

    await prisma.emailVerificationToken.create({
      data: {
        name,
        email,
        password: hashedPassword,
        token,
        expiresAt,
        createdAt: new Date(),
      },
    });

    await sendEmail({
      recipientEmail: email,
      subject: "Verify your email",
      htmlContent: verifyEmailTemplate(token),
    });

    return NextResponse.json(
      {
        data: {
          success: true,
          message: "Check your email to verify account.",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
