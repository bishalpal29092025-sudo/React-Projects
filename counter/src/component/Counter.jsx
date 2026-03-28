import { useState } from "react";
import "../styles/style.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div >
      <div className="container" >
        <h1
          className="number"
          style={{
            color: count > 0 ? "#4ade80" : count < 0 ? "#f87171" : "#fff",
          }}
        >
          {count}
        </h1>
      </div>

      <section className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>

        <button onClick={reset} className="increment">
          Reset
        </button>
      </section>
    </div>
  );
};

export default Counter;
