import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Star } from "lucide-react";
import Image from "next/image";
import { useUserXp } from "../hooks/useUserXp";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

interface Identity {
  user_id: number;
  provider: string;
  identity_data: {
    avatar_url?: string;
  };
}

interface AppUser {
  user_metadata?: {
    avatar_url?: string;
    full_name?: string;
  };
  identities?: Identity[];
}

interface NavbarProps {
  user?: AppUser | null;
}

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<AppUser | null>(user || null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Extract user_id from identities
  const userId = currentUser?.identities?.[0]?.user_id;

  // Use the custom hook to get the user's XP
  const xp = Number(useUserXp(userId || 0));

  useEffect(() => {
    setCurrentUser(user || null);
  }, [user]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setCurrentUser(null);
      setIsMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full px-8 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold">SolanaCodeLab</span>
      </div>
      {currentUser ? (
        <div className="flex items-center space-x-4">
          <div className="bg-gray-800 rounded-full px-3 py-1 flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-white font-medium">{xp} XP</span>
          </div>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
            >
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
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      👋 Hey,{" "}
                      {currentUser?.user_metadata?.full_name?.split(" ")[0] ||
                        "User"}
                    </div>

                    <button
                      onClick={handleSignOut}
                      className="flex w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <LogOut className="mr-3 h-5 w-5" aria-hidden="true" />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
