import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { TodoActions } from "@/store/todoStore/TodoReducer";
import { TodoContainer } from "./style";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { ITodoList } from "@/store/todoStore/interface";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function TodoRedux() {
  const todoState = useAppSelector((state: RootState) => state.todo);
  const dispatch = useAppDispatch();
  const [updateModal, setUpdateModal] = useState(false);
  const defaultTodo = {
    id: "",
    title: "",
    content: "",
    status: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITodoList>({
    resolver: yupResolver(schema),
    defaultValues: defaultTodo,
  });

  const {
    control: controlUpdate,
    handleSubmit: handleSubmitUpdate,
    reset: resetUpdate,
    setValue: setValueUpdate,
    formState: { errors: errorsUpdate },
  } = useForm<ITodoList>({
    resolver: yupResolver(schema),
    defaultValues: defaultTodo,
  });

  useEffect(() => {
    dispatch(TodoActions.getTodo());
  }, []);

  const createNewTodo = (data: ITodoList) => {
    dispatch(
      TodoActions.createTodo({
        ...data,
        id: Math.floor(Math.random() * 9999999999999999).toString(),
      })
    );
    reset();
  };

  const deleteTodo = (id) => {
    dispatch(TodoActions.deleteTodo(id));
  };

  const handleOpenUpdateModal = (data) => {
    setUpdateModal(true);
    setValueUpdate("id", data.id);
    setValueUpdate("title", data.title);
    setValueUpdate("content", data.content);
    setValueUpdate("status", data.status);
  };

  const handleUpdateTodo = (data) => {
    dispatch(TodoActions.updateTodo(data));
    setUpdateModal(false)
    resetUpdate()
  };

  return (
    <TodoContainer>
      <div className="todo-form">
        <div className="group-input">
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <TextField {...field} label="Title" size="small" />
            )}
          />
          <small className="error">
            {errors.title && errors.title.message}
          </small>
        </div>
        <div className="group-input">
          <Controller
            control={control}
            name="content"
            render={({ field }) => (
              <TextField {...field} label="Content" size="small" />
            )}
          />
          <small className="error">
            {errors.title && errors.title.message}
          </small>
        </div>
        <div className="group-input">
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <TextField {...field} label="Status" size="small" />
            )}
          />
          <small className="error">
            {errors.title && errors.title.message}
          </small>
        </div>
        <button onClick={handleSubmit(createNewTodo)}>Create todo</button>
      </div>
      {todoState.todoList.map((item, index) => (
        <div className="todo-list" key={index}>
          <span
            className="todo-update"
            onClick={() => handleOpenUpdateModal(item)}
          >
            Update
          </span>
          <span className="todo-delete" onClick={() => deleteTodo(item.id)}>
            Delete
          </span>
          <p>Title: {item.title}</p>
          <p>Content: {item.content}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}

      <Dialog open={updateModal} onClose={() => setUpdateModal(true)}>
        <DialogTitle id="alert-dialog-title">Update Todo</DialogTitle>
        <DialogContent>
          <div
            className="update-form"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <div className="group-input">
              <Controller
                control={controlUpdate}
                name="title"
                render={({ field }) => (
                  <TextField {...field} label="Title" size="small" />
                )}
              />
              <small className="error">
                {errorsUpdate.title && errorsUpdate.title.message}
              </small>
            </div>
            <div className="group-input">
              <Controller
                control={controlUpdate}
                name="content"
                render={({ field }) => (
                  <TextField {...field} label="Content" size="small" />
                )}
              />
              <small className="error">
                {errorsUpdate.title && errorsUpdate.title.message}
              </small>
            </div>
            <div className="group-input">
              <Controller
                control={controlUpdate}
                name="status"
                render={({ field }) => (
                  <TextField {...field} label="Status" size="small" />
                )}
              />
              <small className="error">
                {errorsUpdate.title && errorsUpdate.title.message}
              </small>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setUpdateModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmitUpdate(handleUpdateTodo)}>Update</Button>
        </DialogActions>
      </Dialog>
    </TodoContainer>
  );
}
