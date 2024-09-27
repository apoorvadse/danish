// app/api/auth/callback/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const error = url.searchParams.get('error');
  const error_description = url.searchParams.get('error_description');
  const baseUrl = process.env.AUTH0_BASE_URL;

  if (error) {
    // Construct the absolute URL for redirection
    const errorPageUrl = `${baseUrl}/error?error=${encodeURIComponent(error)}&error_description=${encodeURIComponent(error_description || '')}`;
    return NextResponse.redirect(errorPageUrl);
  }

  // Handle successful authentication or other logic
  // ...

  return NextResponse.json({ message: 'Success' });
}
