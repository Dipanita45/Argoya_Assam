import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {

  const verificationLink =
    `${process.env.NEXT_PUBLIC_APP_URL}/verify?token=${token}`;

  await resend.emails.send({
    from: "auth@yourapp.com",
    to: email,
    subject: "Verify your account",
    html: `
      <h2>Verify your email</h2>
      <p>Click the link below</p>
      <a href="${verificationLink}">Verify Email</a>
    `
  });
}