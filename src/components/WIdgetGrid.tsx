import React, { useState, useEffect, useRef } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import SocialWidget from "./SocialWidget";
import CoverWidget from "./CoverWidget";
import Modal from "./Modal";

const frontPageWidgets = [
  {
    id: "travel",
    text: "Vibe",
    w: 3,
    h: 2,
    x: 0,
    y: 0,
    image: "_.jpeg",
    cover: true,
    onClick: () => {},
  },
  {
    id: "projects",
    text: "Projects",
    w: 2,
    h: 2,
    x: 4,
    y: 0,
    image: "black-headphones.jpeg",
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
    w: 4,
    h: 2,
    x: 1,
    y: 1,
    image: "stakes-seed-team.jpeg",
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
    icon: "linkedin.png",
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
    icon: "github.svg",
    type: "social",
    onClick: () => {
      window.open("https://github.com/achen5671", "_blank");
    },
    description: "github.com",
  },
];

const projectsWidgets = [
  {
    id: "project-1",
    text: "DocuAI",
    w: 2,
    h: 2,
    x: 0,
    y: 0,
    image: "docuai-dashboard.png",
    onClick: (callback: any) => callback(),
    project: {
      title: "DocuAI – AI Resume Builder",
      description:
        "A web app that helps users create, improve, and share resumes using AI. Built with React, Node.js, and OpenAI API, providing intelligent suggestions and customizable templates.",
      image: "docuai-dashboard.png",
      tech: ["React", "Node.js", "Tailwind CSS", "OpenAI API", "JWT", "GCP"],
      gallery: ["docuai/editor.png", "docuai/share.png", "docuai/resumes.png"],
      features: [
        "AI-powered resume improvement suggestions and content optimization",
        "Customizable templates and layouts for professional resumes",
        "Export resumes to PDF or share online with a unique link",
        "User authentication and profile management with secure JWT sessions",
        "Responsive and mobile-friendly design for seamless use across devices",
      ],
    },
  },
  {
    id: "project-2",
    text: "KeyClash",
    w: 2,
    h: 2,
    x: 2,
    y: 0,
    image: "keyclash-multiplayer.png",
    onClick: (callback: any) => callback(),
    project: {
      title: "KeyClash – Typing & Coding Races",
      description:
        "A real-time multiplayer web app that lets developers race in typing challenges and LeetCode coding problems. Built with React, TypeScript, Node.js, WebSockets, and a Chrome extension for LeetCode integration.",
      image: "keyclash/main.png",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "WebSockets",
        "Chrome Extension",
      ],
      gallery: ["keyclash/extension.png", "keyclash/leetcode.png"],
      features: [
        "Real-time multiplayer typing and coding races with live leaderboard updates",
        "Chrome extension integrates with LeetCode to fetch full problem content including images",
        "Customizable avatars, accuracy feedback, and gamified strike-based mechanics",
        "Create and share rooms with friends for competitive matches",
        "Responsive and engaging UI inspired by modern apps like Typings.gg and Apple design",
      ],
    },
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

// const project = {
//   title: "AI Resume Builder",
//   description:
//     "A web app that helps users create, improve, and share resumes using AI. Built with React, Node.js, and OpenAI.",
//   image: "https://via.placeholder.com/400x250.png?text=Project+Main+Image",
//   tech: ["React", "Node.js", "Tailwind CSS", "OpenAI API", "MongoDB"],
//   gallery: [
//     "https://via.placeholder.com/200x150.png?text=Screenshot+1",
//     "https://via.placeholder.com/200x150.png?text=Screenshot+2",
//     "https://via.placeholder.com/200x150.png?text=Screenshot+3",
//   ],
//   features: [
//     "AI-powered resume improvement suggestions",
//     "Customizable templates and layouts",
//     "Export to PDF or share online",
//     "User authentication and profile management",
//     "Responsive and mobile-friendly design",
//   ],
// };

const Dashboard = () => {
  const [fade, setFade] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const projectRef = useRef(null);

  // this is the selected project
  const [project, setProject] = useState({});

  const [open, setOpen] = useState(false);

  const handleClick = (w) => {
    if (w.id === "projects") {
      w.onClick(projectRef);
    } else if (w.id.startsWith("project-")) {
      const cb = () => {
        setOpen(true);
        setProject(w.project);
      };
      w.onClick(cb);
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
    // <div className="relative p-4 overflow-y-auto hide-scrollbar w-full">
    // <div className="relative p-4 overflow-y-auto hide-scrollbar w-fit max-h-screen">
    <div className="relative p-4 overflow-y-auto hide-scrollbar w-full h-full">
      {/* Hero / First Grid */}
      <GridLayout
        className="layout transition-opacity duration-300"
        layout={mapLayout(frontPageWidgets)}
        cols={5}
        rowHeight={140}
        width={900}
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
        <h2 className="text-black text-2xl font-bold mb-6">Projects 🚀</h2>

        <GridLayout
          className={`layout transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          layout={mapLayout(projectsWidgets)}
          cols={5}
          rowHeight={140}
          width={900}
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
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={project.title}
        description={project.description}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-64 h-40 object-cover rounded-2xl shadow-md"
            />
            <div className="flex flex-col flex-1">
              <h2 className="text-2xl font-semibold text-black">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {(project.tech ?? []).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-32 object-cover rounded-xl shadow-sm"
                />
              ))}
            </div>
          )} */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-sm"
              />
            ))}
          </div> */}
          <div className="flex overflow-x-auto gap-4 mt-4">
            {(project.gallery ?? []).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Screenshot ${i + 1}`}
                className="w-64 h-40 flex-shrink-0 object-cover rounded-xl shadow-sm"
              />
            ))}
          </div>

          {(project.features ?? []) && (
            <div className="mt-4">
              <h3 className="text-lg font-medium text-black mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-700">
                {(project.features ?? []).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Modal>
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
