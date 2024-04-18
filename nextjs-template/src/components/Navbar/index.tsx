import React from "react";
import { NavbarContainer } from "./style";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const redirectRouter = (url: string) => {
    router.push(url);
  };

  return (
    <NavbarContainer>
      <div className="left-side">
        <span>Logo</span>
        <span className="pointer" onClick={() => redirectRouter("/notes/list")}>
          Note
        </span>
        <span
          className="pointer"
          onClick={() => redirectRouter("/linkcard/list")}
        >
          Linkcard
        </span>
        <span className="pointer">Profile</span>
      </div>
      <Button variant="text" color="error">
        logout
      </Button>
    </NavbarContainer>
  );
}
