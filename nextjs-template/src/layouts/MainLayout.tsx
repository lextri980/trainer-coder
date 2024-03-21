import React, { ReactNode } from "react";
import styled from "styled-components";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <MainLayoutContainer>{children}</MainLayoutContainer>;
}

const MainLayoutContainer = styled.div``;
