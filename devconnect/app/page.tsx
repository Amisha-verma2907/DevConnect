import { auth } from "@clerk/nextjs/server";
import Navbar from "@/app/components/Navbar";
import ParentPage from "@/app/parent/page";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-up");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ParentPage />
    </div>
  );
}
