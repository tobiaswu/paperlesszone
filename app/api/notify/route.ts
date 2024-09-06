import { RouteId } from '@/lib/routes';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {
  const transport = nodemailer.createTransport({
    host: 'ha01s019.org-dns.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NOTIFY_EMAIL,
      pass: process.env.NOTIFY_EMAIL_PASSWORD,
    },
  });

  if (req.method === 'POST') {
    const { emails, text, name, articleSlug, locale } = await req.json();
    const mailOptions: Mail.Options = {
      from: process.env.NOTIFY_EMAIL,
      to: emails,
      subject: `${name} replied to your comment`,
      text: `Comment:
      ${text}

      Reply here: https://digitizerspace.com/${locale}${RouteId.blog}/${articleSlug}`,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            reject(err.message);
          }
        });
      });

    try {
      await sendMailPromise();
      return NextResponse.json({ status: 200 });
    } catch (err) {
      return NextResponse.json({ status: 500 });
    }
  } else {
    return NextResponse.json({ status: 405 });
  }
}
