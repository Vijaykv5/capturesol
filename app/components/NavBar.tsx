import React from 'react'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SignIn from "../SignIn";
import useAuthStatus from "../hooks/useAuthStatus";
import { ArrowRight } from 'lucide-react';

const NavBar = () => {
     const { isAuthenticated, session } = useAuthStatus();
  return (
    <div>
      <header className="px-4 py-6 mt-2 flex flex-col sm:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4 sm:mb-0 flex items-center"
        >
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            {!isAuthenticated ? (
              <Button className="bg-purple-600 text-white hover:bg-purple-700 font-medium rounded-full px-6 w-full sm:w-auto">
                Login <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <SignIn />
            )}
          </div>
          {/* <Button className="bg-purple-600 text-white hover:bg-purple-700 font-medium rounded-full px-6 w-full sm:w-auto">
              Start Learning <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
        </motion.div>
      </header>
    </div>
  );
}

export default NavBar