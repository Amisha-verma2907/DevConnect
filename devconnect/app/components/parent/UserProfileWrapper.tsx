"use client";

import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const UserProfileWrapper = () => {
  interface UserData {
    fullName: string;
    profileImage?: string;
    about?: string;
    institution?: string;
    institutionLogo?: string;
    follower?: number;
    viewer?: number;
  }

  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/get-user-details");
        const data = await res.json();
        console.log("User Data:", data); // Log the fetched data
        setUserData(data);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="ml-80 mt-20 text-center">Loading...</div>;

  if (!userData) return <div className="ml-80 mt-20 text-center">No data found.</div>;

  return (
    <UserProfile
      name={userData.fullName}
      profileImage={userData.profileImage || "/images/default-profile.png"} // Use default image if profileImage is undefined
      about={"Aspiring software developer passionate about full-stack projects."}
      institution={"Lovely Professional University"}
      institutionLogo={"/images/lpu-logo.png"}
      follower={123}
      viewer={456}
    />
  );
};

export default UserProfileWrapper;
