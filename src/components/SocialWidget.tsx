// components/widgets/SocialWidget.jsx
import React from "react";

const SocialWidget = ({ icon, title, children }) => {
  return (
    <div
      className="relative h-full w-full rounded-xl border border-[#D1D1D6]
      bg-[#FBFBFB] overflow-hidden p-4
      transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="absolute top-3 left-3">
        <img src={icon} alt={title} className="w-6 h-6 object-contain" />
      </div>

      <div className="flex flex-col justify-end h-full">
        <h3 className="font-semibold text-lg">{title}</h3>
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
};

export default SocialWidget;
