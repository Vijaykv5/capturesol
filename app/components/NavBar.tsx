"use client";

import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import { Settings, LogOut, Star } from "lucide-react";
import Image from "next/image";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface User {
  user_metadata: {
    avatar_url?: string;
    full_name?: string;
    email?: string;
  };
}

interface NavbarProps {
  user?: User | null;
}

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(user);

  const handleSignOut = async () => {
    try {
      // Sign out from Supabase
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      // Set user state to null after sign-out
      setCurrentUser(null);

      // Redirect user to the home page
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="w-full px-8 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold">SolanaCodeLab</span>
      </div>
      {currentUser ? <div className="flex items-center space-x-4">
        <div className="bg-gray-800 rounded-full px-3 py-1 flex items-center">
          <Star className="h-5 w-5 text-yellow-400 mr-2" />
          <span className="text-white font-medium">0 XP</span>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            {currentUser?.user_metadata?.avatar_url && (
              <Image
                src={currentUser.user_metadata.avatar_url}
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
            )}
            <span>{currentUser?.user_metadata?.full_name || "User"}</span>
          </Menu.Button>

          <Menu.Items
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              <div className="px-4 py-2 text-sm text-gray-700">
                👋 Hey,{" "}
                {currentUser?.user_metadata?.full_name?.split(" ")[0] || "User"}
              </div>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } flex px-4 py-2 text-sm`}
                  >
                    <Settings className="mr-3 h-5 w-5" aria-hidden="true" />
                    Profile Settings
                  </a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleSignOut}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-red-600"
                    } flex w-full px-4 py-2 text-sm`}
                  >
                    <LogOut className="mr-3 h-5 w-5" aria-hidden="true" />
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
      
    :<>
      
    </>}

      
    </header>
  );
}
