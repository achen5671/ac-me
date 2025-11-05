// components/widgets/SocialWidget.jsx
import React from "react";

const SocialWidget = ({ icon, title, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        relative h-full w-full rounded-3xl border border-[#E2E2E7]
        bg-white flex flex-col items-center justify-between
        p-6 cursor-pointer
        transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
        hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
      "
    >
      {/* Icon Top Center */}
      <img src={icon} alt={title} className="w-8 h-8 object-contain mt-2" />

      {/* Main Text Center Bottom */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-black leading-none">
          {title}
        </h3>
        {children && (
          <div className="text-sm text-gray-600 mt-1">{children}</div>
        )}
      </div>
    </div>
  );
};

export default SocialWidget;
