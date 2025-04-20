// app/api/get-user-profile/route.ts
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import User from "@/models/Users";

export async function GET() {
  const { userId } = await auth();

  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();

  const user = await User.findOne({ clerkId: userId });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
