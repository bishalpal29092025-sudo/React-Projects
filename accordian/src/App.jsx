import { useState } from "react";
import data from "./data";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let copy = [...multiple];
    const index = copy.indexOf(id);

    if (index === -1) copy.push(id);
    else copy.splice(index, 1);
    setMultiple(copy);
  }
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordion">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <div
              className="title"
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSelection(item.id)
              }
            >
              <h3>{item.question}</h3>
              <span>+</span>
            </div>
            {enableMultiSelection ? multiple.includes(item.id) && (
              <div className="acc-content">{item.answer}</div>
            ) : selected === item.id && (
              <div className="acc-content">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
