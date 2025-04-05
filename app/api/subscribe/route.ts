import { NextResponse } from 'next/server';

// Replace with your actual Mailchimp API key and list ID
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || 'your-mailchimp-api-key';
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID || 'your-mailchimp-list-id';
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER || 'us1'; // e.g., us19, change this to your server

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Construct the Mailchimp API request
    const data = {
      email_address: email,
      status: 'subscribed', // or 'pending' if you want double opt-in
      // You can add merge fields here like first_name, last_name, etc.
    };

    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    // Handle already subscribed emails gracefully
    if (responseData.status === 400 && responseData.title === 'Member Exists') {
      return NextResponse.json(
        { message: 'You are already subscribed to our newsletter!' },
        { status: 200 }
      );
    }

    if (response.status >= 400) {
      return NextResponse.json(
        { error: responseData.detail || 'Error subscribing to the newsletter' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 