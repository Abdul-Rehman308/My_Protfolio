import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { Name, Email, Phone, Address, Message, Service } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Apne email par receive karne ke liye
      subject: `New Contact Form Submission from ${Name}`,
      text: `
        Name: ${Name}
        Email: ${Email}
        Phone: ${Phone}
        Address: ${Address}
        Service: ${Service}
        Message: ${Message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully", info }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
  }
}




