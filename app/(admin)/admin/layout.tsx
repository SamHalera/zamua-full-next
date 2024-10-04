import AdminSideBar from "@/components/admin/AdminSideBar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log("no session!!");
    redirect("/");
  }
  return (
    <div className=" flex gap-8">
      <div className="mr-60">
        <AdminSideBar />
      </div>

      <div className="flex-1 mx-auto">{children}</div>
    </div>
  );
}
