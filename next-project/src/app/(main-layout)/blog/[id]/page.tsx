"use client"
import { useRouter, useParams } from "next/navigation";
import React from "react";

export default function BlogDetail() {
  const router = useRouter();
  const params = useParams()

  const logConsole = () => {
    console.log(router);
    console.log(params);
  };

  return (
    <div>
      <button onClick={logConsole}>Log</button>
    </div>
  );
}
