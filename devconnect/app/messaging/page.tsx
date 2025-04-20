"use client";

import React, { useState } from "react";
import PeopleList from "@/app/components/messaging/PeopleList";
import MessageArea from "@/app/components/messaging/MessageArea";

const users = [
  { id: 1, name: "Alice", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "Hey there!" },
  { id: 2, name: "Bob", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "How's it going?" },
  { id: 3, name: "Charlie", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "Let's meet tomorrow." },
  { id: 4, name: "Alice", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "Hey there!" },
  { id: 5, name: "Bob", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "How's it going?" },
  { id: 6, name: "Charlie", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "Let's meet tomorrow." },
  { id: 7, name: "Alice", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "Hey there!" },
  { id: 8, name: "Bob", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "How's it going?" },
  { id: 9, name: "Charlie", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "Let's meet tomorrow." },
  { id: 10, name: "Alice", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "Hey there!" },
  { id: 11, name: "Bob", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "How's it going?" },
  { id: 12, name: "Charlie", image: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api", lastMessage: "Let's meet tomorrow." },
];

const messages = {
  1: [{ sender: "Alice", text: "Hey! How are you?" }, { sender: "Me", text: "I'm good, you?" }],
  2: [{ sender: "Bob", text: "Wanna catch up?" }, { sender: "Me", text: "Sure, when?" }],
  3: [{ sender: "Charlie", text: "Let's meet tomorrow." }, { sender: "Me", text: "Sounds good!" }],
};

const Messaging = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(users[0].id);

  return (
    <div className="flex h-64">
      <PeopleList users={users} selectedUser={selectedUser} onSelectUser={setSelectedUser} />
      <MessageArea selectedUser={selectedUser} users={users} messages={messages} />
    </div>
  );
};

export default Messaging;
