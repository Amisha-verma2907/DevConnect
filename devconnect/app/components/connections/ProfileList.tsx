"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const profiles = [
  { id: 1, name: "John Doe", about: "Full-stack developer.Cloud computing expert with extensive AWS and Azure knowledge.", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api" },
  { id: 2, name: "Jane Smith", about: "UI/UX designer.Cloud computing expert with extensive AWS and Azure knowledge.", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api" },
  { id: 3, name: "Michael Johnson", about: "AI researcher.Cloud computing expert with extensive AWS and Azure knowledge.", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api" },
  { id: 4, name: "Emily Brown", about: "Product manager.Cloud computing expert with extensive AWS and Azure knowledge.", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api" },
  { id: 5, name: "David Wilson", about: "Cloud computing expert.Cloud computing expert with extensive AWS and Azure knowledge.", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api" },
];

const ProfileList = () => {
  const [following, setFollowing] = useState<{ [key: number]: boolean }>({});
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  const toggleFollow = (id: number) => {
    if (following[id]) {
      setSelectedProfile(id); // Open dialog
    } else {
      setFollowing((prev) => ({ ...prev, [id]: true }));
    }
  };

  const handleUnfollow = () => {
    if (selectedProfile !== null) {
      setFollowing((prev) => ({ ...prev, [selectedProfile]: false }));
      setSelectedProfile(null);
    }
  };

  return (
    <div className="mt-6 w-full p-4 bg-white dark:bg-[#1f1f1f] shadow-lg rounded-lg font-serif">
      <h2 className="text-xl font-serif text-gray-700 dark:text-gray-200 mb-2">Your Connections</h2>

      <div className="space-y-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="border-b border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <img src={profile.image} alt={profile.name} className="w-14 h-14 rounded-full" />
                <div>
                  <h3 className="font-semibold text-[#441752] dark:text-purple-300 hover:text-[#8174A0] dark:hover:text-purple-400">
                    {profile.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{profile.about}</p>
                </div>
              </div>

              <button
                onClick={() => toggleFollow(profile.id)}
                className={`px-4 py-2 rounded transition ${
                  following[profile.id]
                    ? "bg-gray-500 text-white hover:bg-gray-600"
                    : "bg-[#441752] text-white hover:bg-[#8174A0] dark:bg-purple-700 dark:hover:bg-purple-600"
                }`}
              >
                {following[profile.id] ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProfile !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-lg shadow-lg w-96 relative">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4 border-gray-300 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Unfollow</h3>
              <button onClick={() => setSelectedProfile(null)}>
                <FaTimes className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white" />
              </button>
            </div>

            <p className="text-gray-700 dark:text-gray-200 mb-6">
              You are about to unfollow{" "}
              <span className="font-semibold">
                {profiles.find((p) => p.id === selectedProfile)?.name}
              </span>
              .
            </p>

            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white rounded"
                onClick={() => setSelectedProfile(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#441752] text-white hover:bg-[#8174A0] dark:bg-purple-700 dark:hover:bg-purple-600 rounded"
                onClick={handleUnfollow}
              >
                Unfollow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileList;
