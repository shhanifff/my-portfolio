import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, message, website } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_GMAIL,
        pass: process.env.MY_GMAIL_APP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MY_GMAIL,
      to: process.env.MY_GMAIL,
      subject: `New Job Contact from ${name}`,
      html: `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:30px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">
      
      <!-- HEADER -->
      <tr>
        <td style="background:#0f172a; padding:20px 30px;">
          <h2 style="color:#ffffff; margin:0; font-size:22px;">
            New Job Contact Request
          </h2>
          <p style="color:#94a3b8; margin:6px 0 0; font-size:14px;">
            Portfolio Contact Form
          </p>
        </td>
      </tr>

      <!-- BODY -->
      <tr>
        <td style="padding:30px;">
          <p style="font-size:15px; color:#334155; margin-bottom:20px;">
            You have received a new message regarding a job opportunity. Details are below:
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
  <tr>
    <td style="padding:8px 0; color:#64748b; width:120px;">Name</td>
    <td style="padding:8px 0; color:#0f172a;"><b>${name}</b></td>
  </tr>

  <tr>
    <td style="padding:8px 0; color:#64748b;">Email</td>
    <td style="padding:8px 0; color:#0f172a;">
      <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">
        ${email}
      </a>
    </td>
  </tr>

  <tr>
    <td style="padding:8px 0; color:#64748b;">Company</td>
    <td style="padding:8px 0; color:#0f172a;">
      ${company || "—"}
    </td>
  </tr>

  <!-- NEW WEBSITE ROW -->
  <tr>
    <td style="padding:8px 0; color:#64748b;">Website / LinkedIn</td>
    <td style="padding:8px 0; color:#0f172a;">
      ${
        website
          ? `<a href="${website}" target="_blank" style="color:#2563eb; text-decoration:none;">
               ${website}
             </a>`
          : "—"
      }
    </td>
  </tr>
</table>


          <!-- MESSAGE BOX -->
          <div style="margin-top:25px;">
            <p style="font-size:14px; color:#64748b; margin-bottom:8px;">
              Message
            </p>
            <div style="background:#f8fafc; border-left:4px solid #2563eb; padding:15px; border-radius:6px; color:#334155; font-size:14px; line-height:1.6;">
              ${message}
            </div>
          </div>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:#f1f5f9; padding:16px 30px; text-align:center;">
          <p style="margin:0; font-size:12px; color:#64748b;">
            This email was sent from your portfolio contact page.
          </p>
        </td>
      </tr>

    </table>
  </div>
`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
