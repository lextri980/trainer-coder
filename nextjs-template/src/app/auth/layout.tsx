"use client"
import { AuthLayout } from "@/layouts";
import React from "react";

export default function AuthenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
