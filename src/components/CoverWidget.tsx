// components/widgets/CoverWidget.jsx
import React from "react";

const CoverWidget = ({ image, title, onClick, cover = true }) => {
  return (
    <div
      onClick={onClick}
      className="relative h-full w-full rounded-xl overflow-hidden
      border border-[#D1D1D6]
      bg-[#FBFBFB] cursor-pointer
      transition-transform duration-300 hover:-translate-y-1"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          objectFit: cover ? "cover" : "contain",
        }}
      />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <span className="absolute bottom-3 left-3 text-back bg-white rounded-lg text-xs p-1 font-semibold text-lg">
        {title}
      </span>
    </div>
  );
};

export default CoverWidget;
