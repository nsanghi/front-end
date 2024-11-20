import { NextResponse } from "next/server";

import { auth0 } from "@/lib/auth0";

export async function GET() {
  const token = await auth0.getAccessToken();

  // call external API with token... by calling BACKEND_BASE_URL
  console.log(token.token);
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/private`, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from backend');
  }

  const data = await response.json();
  console.log(data);

  return NextResponse.json({
    data: data,
  });
}
