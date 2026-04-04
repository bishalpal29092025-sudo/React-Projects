import { useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  header,
  body,
  footer,
}) {
  // Close on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // lock scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Header */}
        <div className="modal-header">
          <h2>{header || "Default Header"}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {body || <p>This is modal content</p>}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          {footer || <button onClick={onClose}>Close</button>}
        </div>
      </div>
    </div>
  );
}