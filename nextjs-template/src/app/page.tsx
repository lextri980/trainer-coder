"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { AppContainer } from "./style";

export default function Home() {
  useEffect(() => {
    redirect("/notes/list");
  }, []);

  return <AppContainer />;
}
