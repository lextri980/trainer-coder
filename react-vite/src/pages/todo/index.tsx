import { useState, useId, ChangeEvent } from "react";
import { TodoContainer } from "./style";
import { TextField, Button } from "@mui/material";
import { ITodo } from "./interface";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function Todo() {
  const id = useId()
  const [formData, setFormData] = useState<ITodo>({
    id,
    todo: '',
    isEdit: false
  })
  const [todo, setTodo] = useState<ITodo[]>([]);

  /**
   * ! Create a new todo
   * @params 
   * @return void
   */
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target?.name]: e.target?.value,
    })
  }

  /**
   * ! Create a new todo
   * @params 
   * @return void
   */
  const createTodo = () => {
    console.log(formData)
  }

  return (
    <TodoContainer>
      <h1>Todo list</h1>
      <div className="create-group">
        <TextField
          id="outlined-basic"
          size="small"
          label="Todo..."
          variant="outlined"
          name="todo"
          value={formData.todo}
          onChange={onChange}
        />
        <Button variant="outlined" onClick={createTodo}>Create</Button>
      </div>
      <div className="todo-list">
        {todo.map((item, index) => (
          <div className="single-todo" key={index}>
            <div className="content">
              <span className="todo-no">{index + 1}.</span>
              <span>{item.todo}</span>
            </div>
            <div className="action-btn-group">
              <ModeEditOutlineOutlinedIcon className="warning" />
              <DeleteOutlineOutlinedIcon className="error" />
            </div>
          </div>
        ))}
      </div>
    </TodoContainer>
  );
}
