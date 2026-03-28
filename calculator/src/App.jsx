import { useState } from "react";
import "./styles/style.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue((prev) => prev + value);
  };

  const calculate = () => {
    try {
      // Function(return ...) is a slightly safer alternative to eval()
      const result = new Function(`return ${inputValue}`)();
      setInputValue(String(result));
    } catch (_error) {
      setInputValue(_error.message);
      setTimeout(() => setInputValue(""), 1500);
    }
  };

  const clear = () => setInputValue("");
  
  const backspace = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  return (
    <div className="calc-wrapper">
      <form className="calculator" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          className="display" 
          value={inputValue} 
          readOnly 
          placeholder="0"
        />
        
        <div className="buttons">
          <button type="button" onClick={clear} className="btn-operator col-2">AC</button>
          <button type="button" onClick={backspace} className="btn-operator">DEL</button>
          <button type="button" onClick={() => display("/")} className="btn-operator">/</button>

          <button type="button" onClick={() => display("7")}>7</button>
          <button type="button" onClick={() => display("8")}>8</button>
          <button type="button" onClick={() => display("9")}>9</button>
          <button type="button" onClick={() => display("*")} className="btn-operator">*</button>

          <button type="button" onClick={() => display("4")}>4</button>
          <button type="button" onClick={() => display("5")}>5</button>
          <button type="button" onClick={() => display("6")}>6</button>
          <button type="button" onClick={() => display("-")} className="btn-operator">-</button>

          <button type="button" onClick={() => display("1")}>1</button>
          <button type="button" onClick={() => display("2")}>2</button>
          <button type="button" onClick={() => display("3")}>3</button>
          <button type="button" onClick={() => display("+")} className="btn-operator">+</button>

          <button type="button" onClick={() => display("0")}>0</button>
          <button type="button" onClick={() => display("00")}>00</button>
          <button type="button" onClick={() => display(".")}>.</button>
          <button type="button" onClick={calculate} className="btn-equal">=</button>
        </div>
      </form>
    </div>
  );
};

export default App;