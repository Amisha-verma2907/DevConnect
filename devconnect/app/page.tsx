// import Image from "next/image";

import UserProfile from "./home/UserProfile";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-[#1F4529] text-white flex items-center justify-between fixed top-0 left-0 w-full shadow-md z-50">
        <div className="text-2xl font-bold p-5">devConnect</div>
        <ul className="flex gap-8 text-xl pr-7">
          {["Home", "Connections", "Messaging", "Notifications"].map((item) => (
            <li key={item} className="relative">
              <a
                href="#"
                className="hover:text-gray-300 px-4 py-2 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Add padding-top to prevent content from hiding behind the fixed navbar */}
      <UserProfile
        name="John Doe"
        email="john.doe@example.com"
        profileImage="https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api"
      />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 h-screen pt-20 ml-80">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to devConnect!
        </h1>
      </main>
    </div>
  );
}
