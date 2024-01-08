import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Todo from "@/pages/todo";
import DetailTodo from "@/pages/detailTodo";
import MainLayout from "@/layouts/MainLayout";
import BaseLayout from "@/layouts/BaseLayout";

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
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: 'todo',
        element: <BaseLayout />,
        children: [
          {
            path: 'list',
            element: <Todo />
          },
          {
            path: ':id',
            element: <DetailTodo />
          }
        ]
      },
    ],
  },
];

export default routes;
