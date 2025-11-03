import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const initialWidgets = [
  { id: "1", text: "Stakes 2022 (raised 5.3 mil)", w: 1, h: 2, x: 0, y: 0 },
  { id: "2", text: "DocuAI", w: 2, h: 1, x: 1, y: 0 },
  { id: "3", text: "KeyClash", w: 1, h: 1, x: 0, y: 2 },
  { id: "4", text: "Resume", w: 1, h: 1, x: 1, y: 2 },
  { id: "5", text: "Linkedin", w: 1, h: 1, x: 1, y: 2 },
  { id: "6", text: "Github", w: 1, h: 1, x: 1, y: 2 },
];

const WidgetGrid = () => {
  const [layout, setLayout] = useState(
    initialWidgets.map((w) => ({
      i: w.id,
      x: w.x,
      y: w.y,
      w: w.w,
      h: w.h,
    }))
  );

  return (
    <div className="flex-1">
      {/* TODO: at some point, implement my own */}
      <GridLayout
        className="layout"
        layout={layout}
        cols={3}
        rowHeight={140}
        width={900}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
        draggableHandle=".drag-handle"
      >
        {initialWidgets.map((w) => (
          <div
            key={w.id}
            className="border border-black rounded-xl p-4 font-semibold flex items-end bg-white shadow-sm hover:shadow-[4px_4px_0px_black] transition cursor-move drag-handle"
          >
            {w.text}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default WidgetGrid;
