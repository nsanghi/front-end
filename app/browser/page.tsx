"use client";

import { useUser } from "@auth0/nextjs-auth0";

export default function Profile() {
  const { user, isLoading, error } = useUser();

  console.log(`User:${user}`);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Not Authorised</div>;

  return (
    <main>
      <h1>Profile</h1>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </main>
  );
}
