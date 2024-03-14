"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const goToBlog = () => {
    router.push("/blog");
  };

  return (
    <div>
      <button onClick={goToBlog}>Login</button>
    </div>
  );
}
