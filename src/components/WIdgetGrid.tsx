import React, { useState, useEffect, useRef } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import SocialWidget from "./SocialWidget";
import CoverWidget from "./CoverWidget";

const frontPageWidgets = [
  {
    id: "travel",
    text: "Vibe",
    w: 2,
    h: 2,
    x: 0,
    y: 0,
    image:
      "https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU",
    cover: true,
    onClick: () => {},
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
    onClick: (projectRef) => {
      projectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
  {
    id: "stakes",
    text: "Stakes (5.3M raised) (Acquired)",
    w: 2,
    h: 2,
    x: 1,
    y: 1,
    image: "/stakes-seed-team.jpeg",
    cover: true,
    onClick: () => {
      window.open(
        "https://venturebeat.com/business/stakes-raises-5-3m-for-nfts-for-sports-wagering-fans",
        "_blank"
      );
    },
  },
  {
    id: "linkedin",
    text: "Andy Chen",
    w: 1,
    h: 1,
    x: 0,
    y: 0,
    icon: "/linkedin.png",
    type: "social",
    onClick: () => {
      window.open("https://www.linkedin.com/in/achen5671/", "_blank");
    },
    description: "Linkedin",
  },
  {
    id: "github",
    text: "achen5671",
    w: 1,
    h: 1,
    x: 0,
    y: 0,
    icon: "/github.svg",
    type: "social",
    onClick: () => {
      window.open("https://github.com/achen5671", "_blank");
    },
    description: "github.com",
  },
];

const projectsWidgets = [
  {
    id: "docuai",
    text: "DocuAI",
    w: 1,
    h: 1,
    image: "/docuai-dashboard.png",
  },
  {
    id: "keyclash",
    text: "KeyClash",
    w: 1,
    h: 1,
    image: "/keyclash-multiplayer.png",
  },
];

const mapLayout = (widgets) =>
  widgets.map((w, i) => ({
    i: w.id,
    x: w.x ?? i % 3,
    y: w.y ?? Math.floor(i / 3),
    w: w.w,
    h: w.h,
  }));

const Dashboard = () => {
  const [fade, setFade] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const projectRef = useRef(null);

  const handleClick = (w) => {
    if (w.id === "projects") {
      w.onClick(projectRef);
    } else {
      w.onClick();
    }
  };

  const renderWidgets = (widgets) =>
    widgets.map((w) => (
      <div
        key={w.id}
        className="drag-handle h-full w-full"
        onClick={() => handleClick(w)}
      >
        {w.type === "social" ? (
          <SocialWidget
            icon={w.icon}
            title={w.text}
            description={w.description}
          />
        ) : (
          <CoverWidget image={w.image} title={w.text} cover={w.cover} />
        )}
      </div>
    ));

  return (
    <div className="relative w-full w-screen p-4 overflow-y-scroll">
      {/* Hero / First Grid */}
      <GridLayout
        className="layout transition-opacity duration-300"
        layout={mapLayout(frontPageWidgets)}
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
        {renderWidgets(frontPageWidgets)}
      </GridLayout>

      {/* Projects Section */}
      <section ref={projectRef} className="mt-16">
        <h2 className="text-black text-2xl font-bold mb-6">Projects 🧪</h2>

        <GridLayout
          className={`layout transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          layout={mapLayout(projectsWidgets)}
          cols={2}
          rowHeight={300}
          width={950}
          margin={[40, 40]}
          containerPadding={[0, 0]}
          draggableHandle=".drag-handle"
          isResizable
          onDragStart={() => setIsDragging(true)}
          onDragStop={() => setIsDragging(false)}
        >
          {renderWidgets(projectsWidgets)}
        </GridLayout>
      </section>

      {/* Me */}
      {/* <section ref={projectRef} className="mt-16">
        <h2 className="text-black text-2xl font-bold mb-6">Me 👋</h2>

        <GridLayout
          className={`layout transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          layout={mapLayout(projectsWidgets)}
          cols={2}
          rowHeight={300}
          width={950}
          margin={[40, 40]}
          containerPadding={[0, 0]}
          draggableHandle=".drag-handle"
          isResizable
          onDragStart={() => setIsDragging(true)}
          onDragStop={() => setIsDragging(false)}
        >
          {renderWidgets(projectsWidgets)}
        </GridLayout>
      </section> */}
    </div>
  );
};

export default Dashboard;
