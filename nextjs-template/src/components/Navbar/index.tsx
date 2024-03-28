import React from "react";
import { NavbarContainer } from "./style";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <NavbarContainer>
      <div className="left-side">
        <span>Logo</span>
        <span>Note</span>
        <span>Linkcard</span>
        <span>Profile</span>
      </div>
      <Button variant="text" color="error">
        logout
      </Button>
    </NavbarContainer>
  );
}
