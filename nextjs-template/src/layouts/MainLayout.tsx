import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import styled from "styled-components";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <MainLayoutContainer>
      <Navbar></Navbar>
      {children}
    </MainLayoutContainer>
  );
}

const MainLayoutContainer = styled.div``;
