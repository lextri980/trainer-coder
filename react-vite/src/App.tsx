import { useState } from "react";
import "./assets/scss/App.scss";

function App() {
  const [count, setCount] = useState<number>(0);
  const todoList = [
    { title: "A", status: "todo" },
    { title: "B", status: "Done" },
  ];
  // const [string, setString] = useState('');

  // let a: number = 0;

  const countUp = () => {
    setCount(count + 1);
  };

  console.log("re-render");

  return (
    <div className="app-container">
      <button onClick={countUp}>Up</button>
      {count}
      <p>{count % 2 === 0 ? "Even" : "Odd"}</p>

      {count % 2 === 0 ? <p>Even</p> : <p>Odd</p>}

      {todoList.map((item, index) => (
        <div className="list" key={index}>
          <span>{item.title} - </span>
          <span>{item.status}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
