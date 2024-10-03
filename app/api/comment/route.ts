import { RouteId } from '@/lib/routes';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { articleId, commentId, name, email, text, articleSlug, locale } =
      await req.json();
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/comments/api::article.article:${articleId}`;

    const transport = nodemailer.createTransport({
      host: 'ha01s019.org-dns.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NOTIFY_EMAIL,
        pass: process.env.NOTIFY_EMAIL_PASSWORD,
      },
    });
    const mailOptions: Mail.Options = {
      from: process.env.NOTIFY_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject: `${name} posted a comment`,
      text: `Comment:
      ${text}

      Reply here: https://paperlesszone.com/${locale}${RouteId.blog}/${articleSlug}`,
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
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
        body: JSON.stringify({
          author: {
            id: email,
            name: name,
            email: email,
          },
          content: text,
          threadOf: commentId,
        }),
      });

      await sendMailPromise();

      return NextResponse.json(
        {
          message: 'Thanks for your comment.',
        },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        {
          error: 'Failed to publish comment. Please try it later again.',
        },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
