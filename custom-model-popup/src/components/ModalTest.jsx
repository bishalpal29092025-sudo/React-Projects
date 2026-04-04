import { useState } from "react";
import Modal from "./Model";
import "../styles/style.css";

export default function ModalTest() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Modal 🚀
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header="🔥 Advanced Modal"
        body={<p>This is a modern, animated modal</p>}
        footer={
          <button className="action-btn">
            Confirm
          </button>
        }
      />
    </div>
  );
}