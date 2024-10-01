import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    console.log("no session!!");
  }
  return <>{children}</>;
}
