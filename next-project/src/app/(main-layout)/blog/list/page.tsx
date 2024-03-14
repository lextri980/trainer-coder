"use client";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import React from "react";

export default function BlogList() {
  const router = useRouter();
  const params = useParams();
  const query = useSearchParams();

  const logConsole = () => {
    console.log(router);
    console.log(params);
    console.log(query.get("key"));
  };

  return (
    <div>
      <button onClick={logConsole}>Log</button>
    </div>
  );
}
