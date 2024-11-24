import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { supabase } from "../app/utils/supabase";

export default function SignIn() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/course",
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

//creating an XP record for the user
  useEffect(() => {
    const checkUserSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        const currentUser = data.session.user;
       

     
        const { data: userXpData, error } = await supabase
          .from("user_xp")
          .select("UUID")
          .eq("UUID", currentUser.id);

        if (error) {
          console.error("Error checking user XP:", error);
        } else if (userXpData.length === 0) {
          // No entry found for this user, so create a new one
          const { error: insertError } = await supabase
            .from("user_xp")
            .insert([{ UUID: currentUser.id, xp: 0 }]);

          if (insertError) {
            // console.log("Error creating user XP record:", insertError);
          } else {
            console.log("User XP record created successfully.");
          }
        }

        router.push("/course");
      }
    };

    checkUserSession();
  }, [router]);

  return (
    <div className="">
      <Button
        onClick={handleSignIn}
        className="rounded-full px-8 py-6 text-lg w-full sm:w-auto border-gray-600 bg-purple-600 text-white"
      >
        START LEARNING
        <ArrowRight />
      </Button>
    </div>
  );
}
