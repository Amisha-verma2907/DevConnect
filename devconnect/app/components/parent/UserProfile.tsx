"use client";
import React from "react";

interface UserProfileProps {
  name: string;
  profileImage: string;
  about: string;
  institution: string;
  institutionLogo: string;
  follower: number;
  viewer: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  name,  
  profileImage, 
  about, 
  institution, 
  institutionLogo,
  follower,
  viewer
}) => {
  return (
    <div className="bg-[#A888B5] dark:bg-[#1f1f1f] shadow-md dark:shadow-gray-800 w-80 h-screen flex flex-col p-6 fixed left-0 top-0 font-serif">
      {/* Profile Image */}
      <div className="flex items-center flex-col">
        <img
          src={profileImage}
          alt="Profile"
          className="w-52 h-52 rounded-full border-4 border-[#8174A0] mt-20 shadow-lg"
        />
        <h2 className="text-2xl font-semibold mt-4 text-[#441752] dark:text-purple-300 hover:text-[#8174A0] dark:hover:text-purple-400 text-center">
          {name}
        </h2>
      </div>

      {/* About Section */}
      <div className="mt-4 px-4">
        <p className="text-gray-800 dark:text-gray-200 text-sm mt-2 text-center">
          {about}
        </p>
      </div>

      {/* Institution Section */}
      <div className="mt-6 flex space-x-3 bg-white dark:bg-gray-800 p-4 m-4 rounded-lg shadow">
        <img
          src={institutionLogo}
          alt="Institution Logo"
          className="w-10 h-10 rounded-full border dark:border-gray-600"
        />
        <div>
          <h3 className="text-sm font-semibold text-[#441752] dark:text-purple-300 hover:text-[#8174A0] dark:hover:text-purple-400">
            {institution}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Current Institution</p>
        </div>
      </div>

      {/* Followers & Viewers */}
      <div className="flex flex-row space-x-2 mb-2 px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-center">
          Followers: {follower}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-center">
          Viewers: {viewer}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
