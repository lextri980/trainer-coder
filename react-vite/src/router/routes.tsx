import Login from "@/pages/login";
import Posts from "@/pages/posts";
import Dashboard from "@/pages/dashboard";
import Todo from "@/pages/todo";
import DetailTodo from "@/pages/detailTodo";
import ReactHookForm from "@/pages/reactHookForm";
import MainLayout from "@/layouts/MainLayout";
import BaseLayout from "@/layouts/BaseLayout";
import ProtectedRouter from "./ProtectedRouter";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "todo",
        element: <BaseLayout />,
        children: [
          {
            path: "list",
            element: <Todo />,
          },
          {
            path: ":id",
            element: <ProtectedRouter component={DetailTodo} />,
          },
        ],
      },
      {
        path: "post",
        element: <BaseLayout />,
        children: [
          {
            path: "list",
            element: <Posts />,
          },
        ],
      },
      {
        path: "react-hook-form",
        element: <ReactHookForm />,
      },
    ],
  },
];

export default routes;
