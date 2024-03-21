// "use client"
import { MainLayout } from "@/layouts";
import React from "react";

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
