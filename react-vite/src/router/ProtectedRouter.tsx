// import { ReactNode } from "react";
import { getLocal } from "@/utils/storage";
import { Navigate } from "react-router-dom";

interface IPRouter {
  component: React.FC;
}

export default function ProtectedRouter(props: IPRouter) {
  const { component: Component } = props;
  const token = getLocal("token");

  return token ? <Component /> : <Navigate to="/login" />;
}
