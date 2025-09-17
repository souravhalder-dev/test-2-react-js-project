import { useState } from "react";

export default function Player() {
  const [count, setCount] = useState(0);
  const singleRun = (num) => {
    const singleRun = count + num;
    setCount(singleRun);
  };

  return (
    <div className="Player">
      <h1>Sourav Halder Run Count </h1>
      <h1>Count {count} </h1>
      {count >= 50 ? <h1>"welcome Sourav you gat 50 "</h1> : ""}
      <button onClick={() => singleRun(1)}>Single Run</button>
      <button onClick={() => singleRun(6)}>Six</button>
      <button onClick={() => singleRun(4)}>Four</button>
    </div>
  );
}
