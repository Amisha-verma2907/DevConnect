// app/api/sync-user/route.ts
import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { connectDB } from "@/lib/mongodb"; // adjust path as per your folder structure
import User from "@/models/Users"; // your MongoDB User model

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    await connectDB();

    // Check if user already exists in MongoDB
    const existingUser = await User.findOne({ clerkId: userId });

    if (!existingUser) {
      const clerkUser = await clerkClient.users.getUser(userId);

      await User.create({
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        fullName: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`,
        profileImage: clerkUser.imageUrl, // Updated to the correct property name
      });

      return new Response("User created", { status: 201 });
    }

    return new Response("User already exists", { status: 200 });
  } catch (err: any) {
    console.error("Sync user error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
