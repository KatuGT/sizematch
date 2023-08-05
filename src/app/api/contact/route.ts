import { mailOptions, transporter } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { subject, email, text } = body;

  if (!subject || !email || !text) {
    return new NextResponse("Bad request", { status: 500 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: subject,
      text: text,
      html:`<h1>From: ${email}</h1><h2>Subject: ${subject}</h2><p>Subject: ${text}</p>`
    });
    return new NextResponse("Messaje send", { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    } else {
      console.warn("Unexpected error on contact route", error);
    }
  }
};
