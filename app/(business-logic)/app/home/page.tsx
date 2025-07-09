"use client";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);
  const handleOnClick = async () => {
    await signOut({ redirectTo: "/" });
  };
  return (
    <div>
      <button onClick={handleOnClick}>Home Page {process.env.NODE_ENV}</button>
    </div>
  );
};

export default Home;
