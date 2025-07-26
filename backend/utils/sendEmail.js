import nodemailer from "nodemailer"

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Wrap in an async IIFE so we can use await.
export const sendRoleAssignedEmail = async (to,name,role) => {
    const info = await transporter.sendMail({
      from: `"Admin Team" <${process.env.EMAIL_USER}>`,
      to,
       subject: "Your Role Has Been Assigned",
       html: `
      <p>Dear ${name},</p>
      <p>Your account has been updated with the role of <strong>${role}</strong>.</p>
      <p>You can now log in and start using your new privileges.</p>
      <br />
      <p>Regards,<br/>Admin Team</p>
    `,
    });
  
    console.log("Message sent:", info.messageId);

}
