"use client";
import React, { useEffect, useState } from "react";
import { CreateNoteForm, NoteListContainer } from "./style";
import UpdateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { NoteAction } from "@/store/noteStore/NoteReducer";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { INote } from "@/store/noteStore/interface";

export default function NoteList() {
  const dispatch = useAppDispatch();
  const noteStore = useAppSelector((state) => state.note);
  const defaultValues = {
    title: "",
    content: "",
    status: "NORMAL",
  };

  const [openModal, setOpenModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<INote>({ resolver: yupResolver(schema), defaultValues });

  useEffect(() => {
    dispatch(NoteAction.getNoteListRequest());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = () => {
    reset();
    setOpenModal(false);
    setIsUpdate(false);
  };

  const handleOpenUpdateModal = async (item: INote) => {
    dispatch(NoteAction.getNoteDetailRequest(item));
    setIsUpdate(true);
    setOpenModal(true);
  };

  useEffect(() => {
    if (noteStore.note) {
      setValue("title", noteStore.note.title);
      setValue("content", noteStore.note.content);
      setValue("status", noteStore.note.status);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteStore.note]);

  const submitNoteAction = (data: INote) => {
    dispatch(NoteAction.createNoteRequest(data));
    handleCloseModal();
  };

  return (
    <NoteListContainer>
      {noteStore.noteList.map((item, index) => (
        <div
          className={`single-card ${
            item.status === "IMPORTANT"
              ? "red-shadow"
              : item.status === "HIGHLIGHT"
              ? "yellow-shadow"
              : "green-shadow"
          }`}
          key={index}
        >
          <div className="header">
            <span className="title">{item.title}</span>
            <div className="group-action">
              <UpdateIcon
                className="pointer"
                style={{ color: "orange" }}
                onClick={() => handleOpenUpdateModal(item)}
              />
              <DeleteIcon className="pointer" style={{ color: "red" }} />
            </div>
          </div>
          <div className="body">
            <span
              className={`badge ${
                item.status === "IMPORTANT"
                  ? "red-badge"
                  : item.status === "HIGHLIGHT"
                  ? "yellow-badge"
                  : "green-badge"
              }`}
            >
              {item.status}
            </span>
            <span className="content">{item.content}</span>
          </div>
        </div>
      ))}

      <Button
        variant="contained"
        size="small"
        className="add-btn"
        onClick={() => setOpenModal(true)}
      >
        <AddIcon />
      </Button>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle style={{ minWidth: "400px" }} id="alert-dialog-title">
          {isUpdate ? "Update note" : "Create a new note"}
        </DialogTitle>
        <DialogContent>
          <CreateNoteForm>
            <div className="group-input">
              <Controller
                control={control}
                name="title"
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="fw"
                    label="Title"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <small className="error">{errors && errors.title?.message}</small>
            </div>
            <div className="group-input">
              <Controller
                control={control}
                name="content"
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="fw"
                    label="Content"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <small className="error">
                {errors && errors.content?.message}
              </small>
            </div>
            <div className="group-input">
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Status"
                    className="fw"
                    size="small"
                    variant="outlined"
                    labelId="designTypeId-label"
                  >
                    <MenuItem value="NORMAL">Normal</MenuItem>
                    <MenuItem value="HIGHLIGHT">Highlight</MenuItem>
                    <MenuItem value="IMPORTANT">Important</MenuItem>
                  </Select>
                )}
              />
              <small className="error">
                {errors && errors.status?.message}
              </small>
            </div>
          </CreateNoteForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleSubmit(submitNoteAction)} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </NoteListContainer>
  );
}
