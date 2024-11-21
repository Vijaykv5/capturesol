import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push("/course");
    }
  }, [session, router]);

  const handleSignIn = async () => {
    const res = await signIn("google", { redirect: false });
    console.log(res); 
  };

  return (
    <div>
      {session?.user ? (
        <button onClick={() => signOut()}>Log Out</button>
      ) : (
        <Button  onClick={handleSignIn} className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8 py-6 text-lg w-full sm:w-auto">
          START CODING
        </Button>
      )}
    </div>
  );
}
