import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { articleId, commentId, name, email, text } = await req.json();

    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/comments/api::article.article:${articleId}`;

    try {
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
