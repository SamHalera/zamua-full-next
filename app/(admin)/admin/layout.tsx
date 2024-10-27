import HeaderAdmin from "@/components/admin/nav/HeaderAdmin";
import { Toaster } from "@/components/ui/toaster";
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
    redirect("/");
  }
  return (
    <>
      <HeaderAdmin />
      <Toaster />

      <div className="p-4">
        <div className="text-black text-4xl font-bold text-center my-10">
          ADMIN SECTION
        </div>
        {children}
      </div>
    </>
  );
}
