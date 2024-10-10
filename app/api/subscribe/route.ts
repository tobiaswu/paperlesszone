import { type NextRequest, NextResponse } from 'next/server';

const apiUrl = `${process.env.EMAIL_API_URL}/publications/${process.env.EMAIL_PUBLICATION_ID}/subscriptions`;

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { email } = await req.json();

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.EMAIL_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: true,
        utm_source: 'PaperlessZone website',
        utm_medium: 'organic',
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        {
          message:
            'Thanks for you interest! Please check your email to confirm your subscription.',
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        error: 'Failed to subscribe. Please try it later again or contact us.',
      },
      { status: 500 }
    );
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
