import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Todo from "../pages/todo";

const routes = [
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
];

export default routes;
