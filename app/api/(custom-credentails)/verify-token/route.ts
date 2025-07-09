import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { data: { success: false, error: "Invalid or missing token" } },
      { status: 401 }
    );
  }

  const verificationToken = authHeader.split(" ")[1];

  try {
    const record = await prisma.emailVerificationToken.findUnique({
      where: { token: verificationToken },
    });

    if (!record || record.expiresAt < new Date()) {
      return NextResponse.json(
        { data: { success: false, error: "Token is invalid or has expired" } },
        { status: 401 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: record.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { data: { success: false, error: "User already exists" } },
        { status: 409 }
      );
    }

    await prisma.user.create({
      data: {
        name: record.name,
        email: record.email,
        password: record.password,
        emailVerified: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    await prisma.emailVerificationToken.delete({
      where: { token: verificationToken },
    });

    return NextResponse.json(
      {
        data: { success: true, message: "Redirecting you to sign-in page..." },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
