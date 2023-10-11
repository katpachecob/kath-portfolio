
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import EmailTemplate from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <kathepachecobaca@gmail.com>',
      to: ['kathepachecobaca@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}