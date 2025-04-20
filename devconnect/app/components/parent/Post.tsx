"use client";
import React, { useState } from "react";
import { FaHeart, FaComment, FaPaperPlane } from "react-icons/fa";

interface PostProps {
  publisherName: string;
  publisherPhoto: string;
  aboutPublisher: string;
  postImage: string;
  postContent: string;
}

const Post: React.FC<PostProps> = ({ 
  publisherName, 
  publisherPhoto, 
  aboutPublisher, 
  postImage, 
  postContent 
}) => {
  const [expanded, setExpanded] = useState(false);
  const words = postContent.split(" ");
  const shouldTruncate = words.length > 50;
  const displayedContent = expanded ? postContent : words.slice(0, 50).join(" ") + (shouldTruncate ? "..." : "");

  return (
    <div className="bg-white dark:bg-[#1f1f1f] shadow-md dark:shadow-gray-800 rounded-lg p-4 w-full max-w-6xl mx-auto mb-6 font-serif">
      {/* Publisher Info */}
      <div className="flex items-center space-x-4">
        <img 
          src={publisherPhoto} 
          alt="Publisher" 
          className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600" 
        />
        <div>
          <h3 className="text-lg font-semibold text-[#441752] dark:text-purple-300 hover:text-[#8174A0] dark:hover:text-purple-400">
            {publisherName}
          </h3>
          <p className="text-gray-600 text-sm dark:text-gray-400">{aboutPublisher}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="mt-4 text-gray-800 dark:text-gray-200">
        {displayedContent}
        {shouldTruncate && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 ml-2 underline cursor-pointer"
          >
            {expanded ? "show less" : "more"}
          </button>
        )}
      </p>

      {/* Post Image */}
      <div className="mt-4">
        <img 
          src={postImage} 
          alt="Post" 
          className="w-full rounded-lg" 
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4 text-gray-600 dark:text-gray-300">
        <button className="flex items-center space-x-2 hover:text-red-500 dark:hover:text-red-400">
          <FaHeart /> <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-500 dark:hover:text-blue-400">
          <FaComment /> <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-green-500 dark:hover:text-green-400">
          <FaPaperPlane /> <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
