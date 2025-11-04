import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const frontPageWidgets = [
  {
    id: "travel",
    text: "Vibe",
    w: 2,
    h: 2,
    image:
      "https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU",
    x: 0,
    y: 0,
    cover: true,
  },
  {
    id: "projects",
    text: "Projects",
    w: 1,
    h: 2,
    x: 2,
    y: 0,
    image: "/proj-place.jpg",
    cover: true,
  },
  {
    id: "stakes",
    text: "Stakes (5.3M raised) (Aquired)",
    w: 2,
    h: 2,
    image: "/stakes-seed-team.jpeg",
    x: 1,
    y: 1,
    cover: true,
  },
  {
    id: "linkedin",
    text: "LinkedIn",
    w: 1,
    h: 1,
    x: 0,
    y: 0,
    image: "/linkedin.png",
  },
  { id: "github", text: "GitHub", w: 1, h: 1, x: 0, y: 0, image: "github.svg" },
];
// const frontPageWidgets = [
//   {
//     id: "vibe",
//     text: "Vibe",
//     w: 2,
//     h: 2, // rectangle
//     image:
//       "https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU",
//     x: 0,
//     y: 0,
//   },
//   {
//     id: "projects",
//     text: "Projects",
//     w: 1,
//     h: 2, // square-ish tall
//     x: 2,
//     y: 0,
//   },
//   {
//     id: "github-linkedin",
//     text: "GitHub + LinkedIn",
//     w: 2,
//     h: 1, // square row
//     x: 0,
//     y: 2,
//   },
//   {
//     id: "stakes",
//     text: "Stakes (5.3M raised)",
//     w: 1,
//     h: 1, // rectangle right
//     image: "/stakes-seed-team.jpeg",
//     x: 2,
//     y: 2,
//   },
// ];

const projectsWidgets = [
  { id: "docuai", text: "DocuAI", w: 1, h: 1, image: "/docuai.png" },
  { id: "keyclash", text: "KeyClash", w: 1, h: 1, image: "/app-icon.png" },
];

const generateLayout = (widgets) =>
  widgets.map((w) => ({
    i: w.id,
    x: w.x ?? 0,
    y: w.y ?? 0,
    w: w.w,
    h: w.h,
  }));

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("front"); // "front" or "projects"
  const [fade, setFade] = useState(true); // fade animation
  const [isDragging, setIsDragging] = useState(false); // detect drag

  const handleWidgetClick = (id) => {
    if (isDragging) return; // ignore clicks while dragging
    if (id === "projects") {
      setFade(false);
      setTimeout(() => setCurrentPage("projects"), 300);
    }
  };

  const handleBack = () => {
    setFade(false);
    setTimeout(() => setCurrentPage("front"), 300);
  };

  const widgetsToShow =
    currentPage === "front" ? frontPageWidgets : projectsWidgets;
  const layout = generateLayout(widgetsToShow);

  useEffect(() => {
    setFade(true); // fade in after page change
  }, [currentPage]);

  return (
    <div className="relative w-full p-4">
      {currentPage === "projects" && (
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-gray-200 rounded-full font-semibold hover:bg-gray-300 z-10"
          onClick={handleBack}
        >
          Back
        </button>
      )}

      <GridLayout
        className={`layout transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        layout={layout}
        cols={3}
        rowHeight={140}
        width={950}
        margin={[40, 40]}
        containerPadding={[0, 0]}
        draggableHandle=".drag-handle"
        isResizable
        onDragStart={() => setIsDragging(true)}
        onDragStop={() => setIsDragging(false)}
      >
        {widgetsToShow.map((w) => (
          <div
            key={w.id}
            className="drag-handle h-full w-full rounded-xl overflow-hidden bg-[#FBFBFB]"
          >
            <div
              onClick={() => handleWidgetClick(w.id)}
              style={{ cursor: w.id === "projects" ? "pointer" : "default" }}
              className={`
                card-wrapper rounded-xl overflow-hidden flex items-end justify-start p-4
                border border-[#D1D1D6] h-full w-full
                transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                hover:-translate-y-1
              `}
            >
              {w.image && (
                <>
                  <img
                    src={w.image}
                    alt={w.text}
                    className="absolute inset-0"
                    style={{
                      objectFit: w.cover ? "cover" : "contain",
                      width: w.cover ? "100%" : "40px",
                      height: w.cover ? "100%" : "40px",
                      margin: w.cover ? "0px" : "20px",
                    }}
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/5" /> */}
                </>
              )}

              <span
                className={`relative font-semibold text-lg ${
                  w.image ? "text-white" : "text-black"
                }`}
              >
                {w.text}
              </span>
            </div>
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Dashboard;
