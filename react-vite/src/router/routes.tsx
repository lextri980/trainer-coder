import Login from "@/pages/login";
import Posts from "@/pages/posts";
import Dashboard from "@/pages/dashboard";
import Todo from "@/pages/todo";
import DetailTodo from "@/pages/detailTodo";
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
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
    ],
  },
];

export default routes;
