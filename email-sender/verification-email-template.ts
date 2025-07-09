export const verifyEmailTemplate = (token: string) => {
  const verificationLink = `${process.env.HOSTING_DOMIAN}/verify-email?token=${token}`;

  return `
    <div style="font-family: 'Segoe UI', sans-serif; padding: 30px; background: #f7fdfb;">
      <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
        <h2 style="text-align: center; color: #14532d;">Welcome to ReHarvest</h2>
        <p style="font-size: 16px; color: #333;">Hey there 👋,</p>
        <p style="font-size: 16px; color: #333;">
          Thank you for signing up! Please click the button below to verify your email and activate your account:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationLink}"
            style="background-color: #15803d; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Verify Email
          </a>
        </div>
        <p style="font-size: 14px; color: #666;">If you did not request this, please ignore this email.</p>
        <hr style="margin-top: 30px;">
        <p style="text-align: center; font-size: 12px; color: #aaa;">
          ReHarvest – AI for Sustainable Supply Chains
        </p>
      </div>
    </div>
  `;
};
