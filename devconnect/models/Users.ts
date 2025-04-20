import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  fullName: { type: String },
  role: { type: String, default: "user" },
  profileImage: { type: String },
  about: { type: String },
  institution: { type: String },
  institutionLogo: { type: String },
  follower: { type: Number, default: 0 },
  viewer: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
