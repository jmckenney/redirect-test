import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const secret = formData.get('secret') || 'foo';
    
    // Create the redirect URL with the secret
    const redirectUrl = `vidahealthcoach://auth/callback?secret=${encodeURIComponent(secret.toString())}`;
    
    // Return a redirect response
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('Error processing Vida Health Coach redirect:', error);
    return NextResponse.redirect(new URL('/', request.url));
  }
} 