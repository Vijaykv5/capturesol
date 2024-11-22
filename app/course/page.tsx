"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import SignIn from "../SignIn";
import CoursePage from "./course";
import Landing from "../Landing";
import useCurrentUser from "../hooks/useCurrentUser";
import LoadingPage from "../components/loading-page";

const Page = () => {
  const { user, loading } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
      
        router.push("/course");
      } else {
       
        router.push("/");
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>
      <LoadingPage/>
    </div>;
  }

  return (
    <div>
      {user ? (
        <CoursePage user={user} />
      ) : (
        <Landing /> // Redirect to the landing page if no user is logged in
      )}
    </div>
  );
};

export default Page;


