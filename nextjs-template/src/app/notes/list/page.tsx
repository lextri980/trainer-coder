"use client";
import React, { useEffect } from "react";
import { NoteListContainer } from "./style";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { NoteAction } from "@/store/noteStore/NoteReducer";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function NoteList() {
  const dispatch = useAppDispatch();
  const noteStore = useAppSelector((state) => state.note);

  useEffect(() => {
    dispatch(NoteAction.getNoteListRequest());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NoteListContainer>
      {noteStore.noteList.map((item, index) => (
        <div className="single-card" key={index}>
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

      <Button variant="contained" size="small" className="add-btn">
        <AddIcon />
      </Button>
    </NoteListContainer>
  );
}
