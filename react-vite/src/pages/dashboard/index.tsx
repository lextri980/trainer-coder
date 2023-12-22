import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect run");
  }, [count, count2]);

  useEffect(() => {
    return () => {
      console.log("destroy");
    };
  }, []);

  const countUp = () => {
    setCount(count + 1);
  };

  const countUp2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={countUp}>Up 1</button>
      <p>{count2}</p>
      <button onClick={countUp2}>Up 2</button>
      <div className="group-btn">
        <button onClick={() => navigate("/auth")}>Go</button>
        <button onClick={() => navigate("/todo")}>Todo</button>
      </div>
    </div>
  );
}
