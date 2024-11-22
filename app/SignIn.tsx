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
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Error signing out:", error);
    setUser(null);
  };

  useEffect(() => {
    const checkUserSession = async () => {
      router.push("/course");
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        // setUser(");
        console.log(data.session.user);
        
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
        START CODING
        <ArrowRight />
      </Button>
    </div>
  );
}
