import React from "react";

interface UserProfileProps {
  name: string;
  email: string;
  profileImage: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, profileImage }) => {
  return (
    <div className="bg-[#EFE3C2] shadow-md w-80 h-screen flex flex-col items-center p-6 fixed left-0 top-0">
      <img
        src={profileImage}
        alt="Profile"
        className="w-52 h-52 rounded-full border-4 border-gray-300 mt-24"
      />
      <h2 className="text-2xl font-semibold mt-4">{name}</h2>
      <p></p>
    </div>
  );
};

export default UserProfile;
