import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useId, useState } from "react";
import { ITodo } from "./interface";
import { TextFieldStyle, TodoContainer } from "./style";
import { Dialog } from "../../components";

export default function Todo() {
  const id = useId();
  const [formData, setFormData] = useState<ITodo>({
    id,
    todo: "",
    isEdit: false,
  });
  const [todo, setTodo] = useState<ITodo[]>([
    {
      id: 1,
      todo: "Wash dish",
      isEdit: false,
    },
    {
      id: 2,
      todo: "Study",
      isEdit: false,
    },
  ]);
  const [updateModal, setUpdateModal] = useState<boolean>(false);

  /**
   * Handle change todo input
   * @params
   * @return void
   */
  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>, isUpdate: boolean = false) => {
    if(isUpdate) {
      setFormData({
        ...formData,
        [e.target?.name]: e.target?.value,
      });
    } else {
      setFormData({
        ...formData,
        id: Math.floor(Math.random() * 100000000000000000),
        [e.target?.name]: e.target?.value,
      });
    }
  };

  /**
   * Handle open update dialog
   * @params
   * @return void
   */
  const openUpdateDialog = (id: string | number) => {
    const updatedItem = todo.find((item) => {
      return item.id === id;
    });
    if (updatedItem) {
      setFormData(updatedItem);
    }
    setUpdateModal(true);
  };

  /**
   * Handle close update dialog
   * @params
   * @return void
   */
  const closeUpdateDialog = () => {
    setFormData({
      id,
      todo: "",
      isEdit: false,
    });
    setUpdateModal(false);
  };

  /**
   * Create a new todo
   * @params
   * @return void
   */
  const createTodo = () => {
    setFormData({
      id: "",
      todo: "",
      isEdit: false,
    });
    setTodo([...todo, formData]);
  };

  /**
   * Update a todo
   * @params
   * @return void
   */
  const updateTodo = () => {
    const updateData = todo.map(item => {
      if(item.id === formData.id) {
        return {
          ...formData,
          todo: formData.todo
        }
      } else {
        return item
      }
    })
    setTodo(updateData)
    closeUpdateDialog()
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
          onChange={onChangeTodo}
        />
        <Button variant="outlined" onClick={createTodo}>
          Create
        </Button>
      </div>
      <div className="todo-list">
        {todo.map((item, index) => (
          <div className="single-todo" key={index}>
            <div className="content">
              <span className="todo-no">{index + 1}.</span>
              <span>{item.todo}</span>
            </div>
            <div className="action-btn-group">
              <ModeEditOutlineOutlinedIcon
                className="warning pointer"
                onClick={() => openUpdateDialog(item.id)}
              />
              <DeleteOutlineOutlinedIcon className="error pointer" />
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={updateModal}
        title="Update modal"
        submitBtn="Update"
        onCancel={closeUpdateDialog}
        onSubmit={updateTodo}
      >
        <TextFieldStyle
          label="Todo"
          size="small"
          name="todo"
          value={formData.todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeTodo(e, true)}
        ></TextFieldStyle>
      </Dialog>
    </TodoContainer>
  );
}
