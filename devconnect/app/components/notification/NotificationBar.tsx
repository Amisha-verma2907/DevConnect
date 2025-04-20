"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bell } from "lucide-react";
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NotificationItem {
  id: number;
  text: string;
  timestamp: string;
  isRead: boolean;
}

const NotificationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // ✅ Fixed type
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 1,
      text: "New comment on your post",
      timestamp: "2m ago",
      isRead: false,
    },
    { id: 2, text: "Your post was liked", timestamp: "10m ago", isRead: false },
    {
      id: 3,
      text: "New message from Alice",
      timestamp: "30m ago",
      isRead: true,
    },
    {
      id: 4,
      text: "New comment on your post",
      timestamp: "2m ago",
      isRead: false,
    },
    { id: 5, text: "Your post was liked", timestamp: "10m ago", isRead: false },
    {
      id: 6,
      text: "New message from Alice",
      timestamp: "30m ago",
      isRead: true,
    },
    {
      id: 7,
      text: "New comment on your post",
      timestamp: "2m ago",
      isRead: false,
    },
    { id: 8, text: "Your post was liked", timestamp: "10m ago", isRead: false },
    {
      id: 9,
      text: "New message from Alice",
      timestamp: "30m ago",
      isRead: true,
    },
    {
      id: 10,
      text: "New comment on your post",
      timestamp: "2m ago",
      isRead: false,
    },
    {
      id: 11,
      text: "Your post was liked",
      timestamp: "10m ago",
      isRead: false,
    },
    {
      id: 12,
      text: "New message from Alice",
      timestamp: "30m ago",
      isRead: true,
    },
    {
      id: 13,
      text: "New comment on your post",
      timestamp: "2m ago",
      isRead: false,
    },
    {
      id: 14,
      text: "Your post was liked",
      timestamp: "10m ago",
      isRead: false,
    },
    {
      id: 15,
      text: "New message from Alice",
      timestamp: "30m ago",
      isRead: true,
    },
    {
      id: 16,
      text: "New comment on your post",
      timestamp: "2m ago",
      isRead: false,
    },
    {
      id: 17,
      text: "Your post was liked",
      timestamp: "10m ago",
      isRead: false,
    },
    {
      id: 18,
      text: "New message from Alice",
      timestamp: "30m ago",
      isRead: true,
    },
  ]);

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Mark notifications as read when clicked
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="relative" ref={dropdownRef}>
      {" "}
      {/* ✅ Fixed type */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex justify-center items-center"
      >
        <NotificationsIcon className="w-6 h-6 text-white dark:text-white hover:text-gray-300 dark:hover:text-gray-400" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>
      {/* 🔽 Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-6 w-[400px] bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden text-black dark:text-white z-50">
          <div className="max-h-[350px] overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 text-sm cursor-pointer flex justify-between ${
                    notification.isRead
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "bg-[#A888B5] dark:bg-purple-800 text-white"
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div>
                    <p>{notification.text}</p>
                    <span className="text-xs opacity-70">
                      {notification.timestamp}
                    </span>
                  </div>
                  {!notification.isRead && (
                    <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                  )}
                </div>
              ))
            ) : (
              <p className="p-3 text-center text-gray-500 dark:text-gray-400">
                No notifications
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBar;
