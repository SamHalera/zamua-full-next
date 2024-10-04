import HomeContent from "@/components/contents/home/HomeContent";

export default async function Home() {
  return (
    // <div>
    //   {session && <LogoutBUtton />}
    //   <h2>SERVER SESSION</h2>
    //   <pre>{JSON.stringify(session)}</pre>
    //   ZAMUA FULL NEXT
    //   <h2>CLIENT SESSION</h2>
    //   <TestClientComponent />
    // </div>
    <HomeContent />
  );
}
