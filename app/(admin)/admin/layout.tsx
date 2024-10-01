import AdminSideBar from "@/components/contents/Home/admin/AdminSideBar";
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
      <AdminSideBar />

      <div className="flex-1">{children}</div>
    </div>
  );
}
