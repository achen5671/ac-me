// components/widgets/SocialWidget.jsx
import React from "react";

const SocialWidget = ({ icon, title, children, description = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
    relative h-full w-full rounded-3xl border border-[#E2E2E7]
    bg-white flex flex-col
    p-6 cursor-pointer
    transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
    hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
  "
    >
      {/* Icon (Top Left) */}
      <img src={icon} alt={title} className="w-8 h-8 object-contain mb-4" />

      {/* Text (Left aligned) */}
      <div className="flex flex-col">
        <h3 className="text-base font-normal text-black leading-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default SocialWidget;
