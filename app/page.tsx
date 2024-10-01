import LogoutBUtton from "@/components/LogoutBUtton";
import TestClientComponent from "@/components/test/testClientComponent";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session && <LogoutBUtton />}
      <h2>SERVER SESSION</h2>
      <pre>{JSON.stringify(session)}</pre>
      ZAMUA FULL NEXT
      <h2>CLIENT SESSION</h2>
      <TestClientComponent />
    </div>
  );
}
