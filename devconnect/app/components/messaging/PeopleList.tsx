import React from "react";

interface User {
  id: number;
  name: string;
  image: string;
  lastMessage: string;
}

interface PeopleListProps {
  users: User[];
  selectedUser: number | null;
  onSelectUser: (id: number) => void;
}

const PeopleList: React.FC<PeopleListProps> = ({ users, selectedUser, onSelectUser }) => {
  return (
    <div className="w-1/3 bg-white dark:bg-gray-900 h-screen border-r border-gray-300 dark:border-gray-700 flex flex-col font-serif fixed left-0 top-0">
      {/* Fixed Header */}
      <h2 className="text-xl font-bold p-4 border-b border-gray-400 dark:border-gray-600 mt-16 text-[#441752] hover:text-[#8174A0] dark:text-purple-300 dark:hover:text-purple-400">
        Messages
      </h2>

      {/* Scrollable List */}
      <div className="overflow-y-auto flex-1">
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex items-center p-2 cursor-pointer border-b border-gray-300 dark:border-gray-700 ${
              selectedUser === user.id
                ? "bg-[#8174A0] text-gray-100"
                : "hover:bg-[#A888B5] hover:text-gray-100 dark:hover:bg-purple-800 dark:hover:text-white"
            }`}
            onClick={() => onSelectUser(user.id)}
          >
            <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
            <div>
              <h3 className="font-semibold text-[#441752] hover:text-[#8174A0] dark:text-purple-200 dark:hover:text-purple-400">
                {user.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{user.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
