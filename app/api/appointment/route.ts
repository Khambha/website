import { NextResponse } from "next/server";
import { z } from "zod";

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

    // In a real application, you would:
    // 1. Save this to a database
    // 2. Trigger an email notification or SMS
    // 3. Sync with hospital scheduling systems (Epic, Cerner, etc.)

    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      message: "Your appointment request has been submitted. A coordinator will contact you shortly.",
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
