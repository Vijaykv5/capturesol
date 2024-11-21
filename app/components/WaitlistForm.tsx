import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "../supabaseClient";
import { useToast } from "@/hooks/use-toast";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      toast({
        title: "Adding....",
      });

      const { data, error } = await supabase
        .from("waitlist")
        .insert([{ email }]);


      if (error) {
        console.error("Error adding email to waitlist:", error);

        toast({
          title: "ERROR",
          description: `An error occurred. Please try again. ${error.message}`,
        });
      } else {
        console.log("Email added to waitlist:", data);
        toast({
          title: "Added to waitlist",
          description: "You'll be the first to know when we launch.",
        });
      }

      setEmail("");
    } else {
      toast({
        title: "ERROR",
        description: `An error occurred. Please try again`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white text-black"
      />
      <Button
        type="submit"
        className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8 py-6 text-lg w-full"
      >
        Join Waitlist
      </Button>
    </form>
  );
}
