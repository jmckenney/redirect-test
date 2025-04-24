import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const secret = formData.get('secret') || 'foo';
    
    // Create the redirect URL with the secret
    const redirectUrl = `zoomus://auth/callback?secret=${encodeURIComponent(secret.toString())}`;
    
    // Return a redirect response with status 302
    return NextResponse.redirect(redirectUrl, { status: 302 });
  } catch (error) {
    console.error('Error processing Zoomus redirect:', error);
    return NextResponse.redirect(new URL('/', request.url), { status: 302 });
  }
} 