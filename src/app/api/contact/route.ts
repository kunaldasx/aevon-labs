import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const { name, email, service, budget, message } = body;

		// Basic server-side validation
		if (!name || !email || !message) {
			return NextResponse.json(
				{
					success: false,
					message: "Name, email and message are required.",
				},
				{ status: 400 },
			);
		}

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT) || 465,
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
			to: process.env.CONTACT_EMAIL,
			replyTo: email,
			subject: `New Project Inquiry — ${service || "General Inquiry"}`,
			text: `
New project inquiry

Name: ${name}
Email: ${email}
Service: ${service || "Not specified"}
Budget: ${budget || "Not specified"}

Message:
${message}
			`,
			html: `
				<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
					<h2>New Project Inquiry</h2>

					<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
						<tr>
							<td style="padding: 8px 0; font-weight: bold;">Name</td>
							<td style="padding: 8px 0;">${name}</td>
						</tr>

						<tr>
							<td style="padding: 8px 0; font-weight: bold;">Email</td>
							<td style="padding: 8px 0;">${email}</td>
						</tr>

						<tr>
							<td style="padding: 8px 0; font-weight: bold;">Service</td>
							<td style="padding: 8px 0;">${service || "Not specified"}</td>
						</tr>

						<tr>
							<td style="padding: 8px 0; font-weight: bold;">Budget</td>
							<td style="padding: 8px 0;">${budget || "Not specified"}</td>
						</tr>
					</table>

					<h3>Message</h3>

					<p style="white-space: pre-wrap;">
						${message}
					</p>
				</div>
			`,
		});

		return NextResponse.json({
			success: true,
			message: "Message sent successfully.",
		});
	} catch (error) {
		console.error("Contact form error:", error);

		return NextResponse.json(
			{
				success: false,
				message: "Failed to send message.",
			},
			{ status: 500 },
		);
	}
}
