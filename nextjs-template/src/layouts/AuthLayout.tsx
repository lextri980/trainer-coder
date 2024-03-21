import React, { ReactNode } from "react";
import styled from "styled-components";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
}

const AuthLayoutContainer = styled.div``;
