"use client";

import { getAccessToken } from "@auth0/nextjs-auth0";

export default function Component() {
  async function fetchData() {
    const token = await getAccessToken();

    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/private`,
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from backend");
    }

    const data = await response.json();
    console.log(data);
  }

  return (
    <main>
      <button onClick={fetchData}>Fetch Data</button>
    </main>
  );
}
