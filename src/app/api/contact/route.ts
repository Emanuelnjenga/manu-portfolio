import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // 1. Basic Sanitization/Validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 2. Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        // 3. Rate Limiting Placeholder
        // In production, use redis or similar to limit requests by IP

        // 4. Send to CRM / Email Placeholder
        console.log(`[Contact API] Received from ${name} (${email}): ${subject}`);
        console.log(`[Message]: ${message}`);

        // Success Response
        return NextResponse.json({ success: true, message: "Thank you. We've received your request." });

    } catch (error) {
        console.error("[Contact API Error]:", error);
        return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
    }
}
