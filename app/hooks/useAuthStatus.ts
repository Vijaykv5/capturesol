import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAuthStatus = () => {
  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, session, router]);

  return { isAuthenticated, session };
};

export default useAuthStatus;
