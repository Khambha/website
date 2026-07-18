import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Phone number is invalid"),
  email: z.string().email("Invalid email address"),
  preferredDate: z.string().min(1, "Date is required"),
  message: z.string().optional(),
  isEmergency: z.boolean().default(false),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body against schema
    const parsedData = appointmentSchema.parse(body);

    // If it's an emergency, send a real email alert via Nodemailer
    if (parsedData.isEmergency) {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Dr. Vijay Ganesh Sankar Website" <${process.env.EMAIL_USER}>`,
          to: "drvijayganeshsankar@gmail.com",
          subject: `🚨 EMERGENCY CONSULTATION REQUEST - ${parsedData.name}`,
          html: `
            <div style="font-family: sans-serif; padding: 25px; border: 2px solid #ef4444; border-radius: 16px; max-width: 600px; background-color: #fff;">
              <h2 style="color: #dc2626; margin-top: 0; font-size: 20px; font-weight: 800; border-bottom: 1px solid #fee2e2; padding-bottom: 10px;">
                🚨 Urgent Emergency Request Received
              </h2>
              <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                An urgent pediatric surgical consultation request has been submitted. Immediate action is recommended.
              </p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #1e293b; border-bottom: 1px solid #f1f5f9; width: 160px;">Parent Name:</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #334155; border-bottom: 1px solid #f1f5f9;">${parsedData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #1e293b; border-bottom: 1px solid #f1f5f9;">Phone Number:</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #2563eb; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                    <a href="tel:${parsedData.phone}" style="text-decoration: none; color: inherit;">${parsedData.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #1e293b; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #334155; border-bottom: 1px solid #f1f5f9;">
                    <a href="mailto:${parsedData.email}" style="text-decoration: none; color: inherit;">${parsedData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #1e293b; border-bottom: 1px solid #f1f5f9;">Preferred Date:</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #334155; border-bottom: 1px solid #f1f5f9;">${parsedData.preferredDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #1e293b; vertical-align: top;">Case Details:</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #334155; line-height: 1.5; white-space: pre-line;">${parsedData.message || "None provided"}</td>
                </tr>
              </table>
              
              <div style="margin-top: 10px; padding: 12px 16px; background-color: #fef2f2; border: 1px solid #fee2e2; border-radius: 8px; font-size: 13px; color: #991b1b; font-weight: bold;">
                👉 Action Required: Please review schedule and telephone this parent immediately.
              </div>
            </div>
          `,
        });
      } else {
        console.warn("Nodemailer: EMAIL_USER or EMAIL_PASS environment variables are missing. Emergency email skipped.");
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been received. Opening WhatsApp to complete your message...",
      data: parsedData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
