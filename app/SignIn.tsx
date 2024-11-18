"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const session = useSession();
  console.log(session);

  return (
    <div>
      {session.data?.user && <button onClick={() => signOut()}>Log Out</button>}
      {!session.data?.user && <button onClick={() => signIn()}>Sign in</button>}
      {/* {session.data?.user} */}
    </div>
  );
}
