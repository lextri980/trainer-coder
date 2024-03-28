"use client";
import React from "react";
import { NoteListContainer } from "./style";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

export default function NoteList() {
  const array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <NoteListContainer>
      {array.map(() => (
        <div className="single-card">
          <div className="header">
            <span className="title">Title</span>
            <div className="group-action">
              <CreateIcon style={{ color: "orange" }} />
              <DeleteIcon style={{ color: "red" }} />
            </div>
          </div>
          <div className="body">
            <span className="badge">TODO</span>
            <span className="content">Content</span>
          </div>
        </div>
      ))}
    </NoteListContainer>
  );
}
