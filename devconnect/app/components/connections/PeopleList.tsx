"use client";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const people = [
  {
    id: 1,
    name: "John Doe",
    about: "Experienced software developer specializing in full-stack applications.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", // Replace with actual images
  },
  {
    id: 2,
    name: "Jane Smith",
    about: "UI/UX designer with a passion for creating user-friendly interfaces.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 3,
    name: "Michael Johnson",
    about: "AI enthusiast working on cutting-edge machine learning models.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 4,
    name: "Emily Brown",
    about: "Product manager with experience in scaling tech startups.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 5,
    name: "David Wilson",
    about: "Cloud computing expert with extensive AWS and Azure knowledge.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 6,
    name: "Sarah Thompson",
    about: "Cybersecurity specialist ensuring safe digital environments.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 7,
    name: "John Doe",
    about: "Experienced software developer specializing in full-stack applications.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", // Replace with actual images
  },
  {
    id: 8,
    name: "Jane Smith",
    about: "UI/UX designer with a passion for creating user-friendly interfaces.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 9,
    name: "Michael Johnson",
    about: "AI enthusiast working on cutting-edge machine learning models.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 10,
    name: "Emily Brown",
    about: "Product manager with experience in scaling tech startups.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 11,
    name: "David Wilson",
    about: "Cloud computing expert with extensive AWS and Azure knowledge.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
  {
    id: 12,
    name: "Sarah Thompson",
    about: "Cybersecurity specialist ensuring safe digital environments.",
    image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
  },
];

const PeopleList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    if (startIndex + itemsPerPage < people.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative w-full p-4 bg-white dark:bg-[#1f1f1f] shadow-lg rounded-lg font-serif">
      <div className="flex flex-col overflow-hidden space-x-4">
        <div className="flex flex-row justify-between mb-4">
          <h2 className="text-xl font-serif text-gray-700 dark:text-gray-200">
            People you may know based on your recent activity
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-[#441752] dark:text-purple-300 hover:text-[#8174A0] dark:hover:text-purple-400"
          >
            Show All
          </button>
        </div>
        <div className="flex flex-row overflow-x-auto no-scrollbar gap-4 mt-4">
          {people.slice(startIndex, startIndex + itemsPerPage).map((person) => (
            <div
              key={person.id}
              className="flex flex-col flex-shrink-0 w-64 h-80 p-4 border border-none rounded-lg shadow-md justify-between items-center text-center bg-white dark:bg-[#2a2a2a]"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full mb-2"
              />
              <h3 className="font-semibold text-[#441752] dark:text-purple-300 hover:text-[#8174A0] dark:hover:text-purple-400">
                {person.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {person.about.split(" ").slice(0, 10).join(" ")}...
              </p>
              <button className="mt-2 px-4 py-2 bg-[#441752] text-white dark:bg-purple-700 rounded flex items-center gap-2 hover:bg-[#8174A0] dark:hover:bg-purple-600">
                <FaUserPlus /> Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full"
        onClick={handlePrev}
        disabled={startIndex === 0}
      >
        ◀
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full"
        onClick={handleNext}
        disabled={startIndex + itemsPerPage >= people.length}
      >
        ▶
      </button>
    </div>
  );
};

export default PeopleList;
