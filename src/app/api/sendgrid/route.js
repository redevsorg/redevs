import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

console.log('process.env.SENDGRID_API_KEY')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  try {
    const data = await req.json();

    await sendgrid.send({
      to: ["contact@redevs.org", "rohitsandadi@gmail.com", "sahithpanch@gmail.com", "redevsorg@gmail.com"], // Your email where you'll receive emails
      from: "contact@redevs.org", // your website email address here
      replyTo: data.email,
      subject: `[Redevs Contact] : ${data.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Message from ${data.fullname}, ✉️${data.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${data.message}</p>
              <br>
              </div>

              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({error: error.message}, { status: error.statusCode || 500});
  }

  return NextResponse.json({ error: "" }, { status: 200});
}
