export interface ITodoStore {
  loading: boolean;
  todoList: ITodoList[];
}

export interface ITodoList {
  id: string;
  content: string;
  title: string;
  status: string;
}
