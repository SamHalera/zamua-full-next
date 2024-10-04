import ButtonToAdmin from "@/components/ButtonToAdmin";
import Footer from "@/components/footer/Footer";
import Header from "@/components/nav/Header";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header />
      {children}
      {session && <ButtonToAdmin />}

      <Footer />
    </>
  );
}
