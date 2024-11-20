import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  console.log(session);

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
    </main>
  );
}
