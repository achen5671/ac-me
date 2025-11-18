import { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  const [show, setShow] = useState(isOpen);

  // When isOpen changes, show the modal first
  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  // Remove modal from DOM after closing animation
  const handleTransitionEnd = () => {
    if (!isOpen) setShow(false);
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-start p-6 overflow-y-auto transition-all duration-300 transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onTransitionEnd={handleTransitionEnd}
      >
        {title && (
          <h1 className="text-2xl font-normal text-black mb-4">{title}</h1>
        )}

        <div className="w-full max-w-3xl bg-white rounded-3xl p-6 shadow-xl">
          {children}
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 rounded-xl bg-gray-100 text-black hover:bg-gray-200 transition"
        >
          Close
        </button>
      </div>
    </>
  );
}
