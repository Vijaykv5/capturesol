import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export function useUserXp(userId:number) {
  const [xp, setXp] = useState(0);

  useEffect(() => {
    if (userId) {
      fetchUserXp(userId);
    }
  }, [userId]);

  const fetchUserXp = async (userId:number) => {
    try {
      const { data, error } = await supabase
        .from("user_xp")
        .select("xp")
        .eq("UUID", userId)
        .single();

      if (error) throw error;
      if (data) setXp(data.xp);
      
    } catch (error) {
      console.log("Error fetching XP:", error);
    }
  };

  return xp;
}
