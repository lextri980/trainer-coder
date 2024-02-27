import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { TodoActions } from "@/store/todoStore/TodoReducer";
import { TodoContainer } from "./style";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { ITodoList } from "@/store/todoStore/interface";

export default function TodoRedux() {
  const todoState = useAppSelector((state: RootState) => state.todo);
  const dispatch = useAppDispatch();
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
          <p>Title: {item.title}</p>
          <p>Content: {item.content}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </TodoContainer>
  );
}
