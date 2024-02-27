import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useContext, useId, useState } from "react";
import { ITodo } from "./interface";
import { TextFieldStyle, TodoContainer } from "./style";
import { Dialog } from "../../components";
import { useNavigate } from "react-router-dom";
import { SetAuthContext } from "@/contexts";

export default function Todo() {
  const navigate = useNavigate();
  const authContext = useContext(SetAuthContext)
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
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  console.log(authContext)

  /**
   * Handle change todo input
   * @params
   * @return void
   */
  const onChangeTodo = (
    e: ChangeEvent<HTMLInputElement>,
    isUpdate: boolean = false
  ) => {
    if (isUpdate) {
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
    const updateData = todo.map((item) => {
      if (item.id === formData.id) {
        return {
          ...formData,
          todo: formData.todo,
        };
      } else {
        return item;
      }
    });
    setTodo(updateData);
    closeUpdateDialog();
  };

  /**
   * Handle open delete dialog
   * @params
   * @return void
   */
  const openDeleteDialog = (id: string | number) => {
    const deletedItem = todo.find((item) => {
      return item.id === id;
    });
    if (deletedItem) {
      setFormData(deletedItem);
    }
    setDeleteModal(true);
  };

  const deleteTodo = () => {
    const deleteData = todo.filter((item) => {
      return item.id !== formData.id;
    });
    setTodo(deleteData);
    setDeleteModal(false);
    setFormData({
      id,
      todo: "",
      isEdit: false,
    });
  };

  const goDetail = (id: string | number) => {
    navigate(`/todo/${id}?key1=value1&key2=value2`);
  };

  return (
    <TodoContainer>
      <h1>Todo list ne</h1>
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
              <span onClick={() => goDetail(item.id)}>{item.todo}</span>
            </div>
            <div className="action-btn-group">
              <ModeEditOutlineOutlinedIcon
                className="warning pointer"
                onClick={() => openUpdateDialog(item.id)}
              />
              <DeleteOutlineOutlinedIcon
                className="error pointer"
                onClick={() => openDeleteDialog(item.id)}
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={updateModal}
        title="Update todo"
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

      <Dialog
        open={deleteModal}
        title="Delete todo"
        submitBtn="Delete"
        onCancel={() => setDeleteModal(false)}
        onSubmit={deleteTodo}
      >
        <p>Are you sure to delete this todo?</p>
      </Dialog>
    </TodoContainer>
  );
}
