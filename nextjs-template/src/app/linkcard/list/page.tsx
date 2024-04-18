"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { LinkcardAction } from "@/store/linkcardStore/LinkcardReducer";
import { ILinkcard } from "@/store/linkcardStore/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { schema } from "./schema";
import { CreateNoteForm, LinkcardListContainer } from "./style";
import Link from "next/link";

export default function NoteList() {
  const dispatch = useAppDispatch();
  const linkcardStore = useAppSelector((state) => state.linkcard);
  const defaultValues = {
    _id: "",
    title: "",
    url: "",
    status: "TO LEARN",
  };

  const [openModal, setOpenModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ILinkcard>({ resolver: yupResolver(schema), defaultValues });

  useEffect(() => {
    dispatch(LinkcardAction.getLinkcardListRequest());
  }, []);

  const handleCloseModal = () => {
    reset();
    setOpenModal(false);
    setIsUpdate(false);
  };

  // const handleOpenUpdateModal = async (item: ILinkcard) => {
  //   dispatch(NoteAction.getNoteDetailRequest(item));
  //   setIsUpdate(true);
  //   setOpenModal(true);
  // };

  // useEffect(() => {
  //   if (noteStore.note) {
  //     setValue("title", noteStore.note.title);
  //     setValue("content", noteStore.note.content);
  //     setValue("status", noteStore.note.status);
  //   }
  // }, [noteStore.note]);

  const submitNoteAction = (data: ILinkcard) => {
    // if (isUpdate) {
    //   dispatch(
    //     NoteAction.updateNoteRequest({ ...data, _id: noteStore.note?._id })
    //   );
    // } else {
    //   dispatch(NoteAction.createNoteRequest(data));
    // }
    dispatch(LinkcardAction.createLinkcardRequest(data));
    handleCloseModal();
  };

  return (
    <LinkcardListContainer>
      {linkcardStore.linkcardList.map((item, index) => (
        <div
          className={`single-card ${
            item.status === "TO LEARN"
              ? "red-shadow"
              : item.status === "LEARNING"
              ? "yellow-shadow"
              : "green-shadow"
          }`}
          key={index}
        >
          <div className="header">
            <span className="title">{item.title}</span>
            <div className="group-action">
              <UpdateIcon className="pointer" style={{ color: "orange" }} />
              <DeleteIcon className="pointer" style={{ color: "red" }} />
            </div>
          </div>
          <div className="body">
            <span
              className={`badge ${
                item.status === "TO LEARN"
                  ? "red-badge"
                  : item.status === "LEARNING"
                  ? "yellow-badge"
                  : "green-badge"
              }`}
            >
              {item.status}
            </span>
            <a className="content" href={item.url} target="_blank">
              {item.url}
            </a>
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
          {isUpdate ? "Update link card" : "Create a new link card"}
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
                name="url"
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="fw"
                    label="URL"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <small className="error">{errors && errors.url?.message}</small>
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
                    <MenuItem value="LEARNED">Learned</MenuItem>
                    <MenuItem value="LEARNING">Learning</MenuItem>
                    <MenuItem value="TO LEARN">To learn</MenuItem>
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
            {isUpdate ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </LinkcardListContainer>
  );
}
