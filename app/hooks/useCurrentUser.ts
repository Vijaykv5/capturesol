import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { User as SupabaseUser } from "@supabase/supabase-js";

interface User extends SupabaseUser {
  user_metadata: {
    avatar_url?: string;
    full_name?: string;
  };
}

const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the current user when the component mounts
    const getCurrentUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user as User);
      setLoading(false);
    };

    getCurrentUser();

    // Listen for auth state changes to update the user
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser((session?.user as User) || null);
      }
    );

    // Cleanup the auth listener on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
};

export default useCurrentUser;
