import "./assets/scss/App.scss";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";
import { SetAuthContextProvider } from "@/contexts";

export default function App() {
  const router = useRoutes(routes);

  return (
    <div className="app-container">
      <SetAuthContextProvider>{router}</SetAuthContextProvider>
    </div>
  );
}
