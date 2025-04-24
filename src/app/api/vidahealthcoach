import { NextResponse } from 'next/server';

export async function GET() {
  // The URL we want to redirect to
  const redirectUrl = 'vidahealthcoach://auth/callback?secret=foo';
  
  // Create a response that redirects to the custom scheme
  return NextResponse.redirect(redirectUrl);
} 