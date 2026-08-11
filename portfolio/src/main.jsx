import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ServicesPage from "./components/pages/ServicesPage";
import BlogPage from "./components/pages/BlogPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  const path = window.location.pathname;

  if (path === "/about") {
    return <AboutPage />;
  }

  if (path === "/projects") {
    return <ProjectsPage />;
  }

  if (path === "/services") {
    return <ServicesPage />;
  }

  if (path === "/blog") {
    return <BlogPage />;
  }

  if (path === "/contact") {
    return <ContactPage />;
  }

  return <HomePage />;
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  // Listen for route changes from the router
  window.addEventListener("react-route-change", () => {
    root.render(
      <React.StrictMode>
        <App />
        <Analytics />
      </React.StrictMode>
    );
  });

  // Initial render
  root.render(
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  );
}