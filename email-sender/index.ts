import nodemailer from "nodemailer";

interface SendEmailOptions {
  recipientEmail: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_VERIFIED_DOMAIN = process.env.RESEND_VERIFIED_DOMAIN;
const NODE_ENV = process.env.NODE_ENV || "development";

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true,
  auth: {
    user: "resend",
    pass: RESEND_API_KEY,
  },
});

export const sendEmail = async ({
  recipientEmail,
  subject,
  htmlContent,
  textContent,
}: SendEmailOptions) => {
  let fromAddress: string;
  const finalRecipientAddress: string = recipientEmail;

  if (NODE_ENV === "production") {
    fromAddress = `Reharvest <noreply@${RESEND_VERIFIED_DOMAIN}>`;
  } else {
    fromAddress = `Reharvest dev <noreply@${RESEND_VERIFIED_DOMAIN}>`;
  }

  const mailOption = {
    from: fromAddress,
    to: finalRecipientAddress,
    subject: NODE_ENV === "development" ? `dev ${subject}` : subject,
    html: htmlContent,
    text: textContent || htmlContent.replace(/<[^>]*>/g, ""),
  };

  try {
    const info = await transporter.sendMail(mailOption);
    return info;
  } catch (error) {
    console.error("Failed to send Email : ", error);
    throw error;
  }
};
