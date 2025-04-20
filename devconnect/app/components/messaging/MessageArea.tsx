import React, { useState } from "react";
import { Paperclip, Smile, Send } from "lucide-react";

interface Message {
  sender: string;
  text: string;
}

interface MessageAreaProps {
  selectedUser: number | null;
  users: { id: number; name: string }[];
  messages: Record<number, Message[]>;
}

const MessageArea: React.FC<MessageAreaProps> = ({ selectedUser, users, messages }) => {
  const [newMessage, setNewMessage] = useState("");

  if (!selectedUser) {
    return (
      <div className="w-2/3 flex items-center justify-center text-gray-500 dark:text-gray-300">
        Select a conversation
      </div>
    );
  }

  const user = users.find((u) => u.id === selectedUser);

  return (
    <div className="w-2/3 h-screen flex flex-col fixed right-0 top-0 font-serif">
      {/* 🔹 Chat Header */}
      <div className="p-4 border-b border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-md mt-16">
        <h2 className="text-xl font-bold text-[#441752] hover:text-[#8174A0] dark:text-purple-300 dark:hover:text-purple-400">
          Chat with {user?.name}
        </h2>
      </div>

      {/* 🔹 Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100 dark:bg-gray-800">
        {messages[selectedUser]?.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg w-fit max-w-xs ${
              msg.sender === "Me"
                ? "bg-[#A888B5] text-white ml-auto"
                : "bg-gray-300 dark:bg-gray-700 text-black dark:text-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* 🔹 Message Input */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-3 flex flex-col items-center gap-3 shadow-md">
        <div className="w-full flex items-center gap-2">
          <textarea
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-400 dark:border-gray-600 rounded-lg h-36 resize-none w-2xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-[#441752]"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-between items-center w-full border-t border-gray-400 dark:border-gray-600 pt-2">
          <div>
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <Paperclip size={20} />
            </button>

            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <Smile size={20} />
            </button>
          </div>

          <div>
            <button className="p-2 bg-[#441752] text-white w-24 rounded-2xl hover:bg-[#8174A0] dark:bg-purple-700 dark:hover:bg-purple-600 flex flex-row items-center justify-center gap-2">
              <p>Send</p>
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
