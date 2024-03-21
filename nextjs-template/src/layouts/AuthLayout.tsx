import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
import bgImg from "@/assets/image/background-img.jpg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <AuthLayoutContainer>
      <Image src={bgImg} layout="fill" objectFit="contain" alt="bg"></Image>
      {children}
    </AuthLayoutContainer>
  );
}

const AuthLayoutContainer = styled.div``;
