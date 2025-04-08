import React, { useState, useEffect } from "react";
import FadeInSection from "./FadeInSection";
import "../styles/Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Pagination from "@mui/material/Pagination";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const projectsPerPage = isMobile ? 3 : 6;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      title: "ChatOTP",
      description:
        "A Full-stack AI chatbot leveraging FastAPI, React, and OpenAI, using scraped resources and embeddings for fast, accurate responses.",
      image: "/images/chatotp.png",
      technologies: ["Python", "React", "OpenAI", "ChromaDB"],
      githubLink: "https://github.com/ayazlockhat/COTO-ChatBot",
      demoLink: null,
    },
    {
      title: "ShareWize",
      description:
        "ShareWize makes bill splitting easy with React, Node.js, AWS, and Bootstrap, providing seamless group expense management.",
      image: "/images/shareWize.png",
      technologies: ["React", "Node.js", "AWS", "Bootstrap"],
      githubLink: "https://github.com/ayazlockhat/ShareWize",
      demoLink: null,
    },
    {
      title: "CS Coursebook",
      description:
        "Manage grades with secure, reliable storage through our course book, built with ReactJS, CSS, and HTML.",
      image: "/images/CSC.jpg",
      technologies: ["React", "JavaScript", "CSS", "Node.js"],
      githubLink: "https://github.com/naseer-rehman/Common-Sense-Coursebook",
      demoLink: "https://common-sense-coursebook.vercel.app/",
    },
    {
      title: "Finance Bot",
      description:
        "A Dockerized Discord bot built with Python and Yahoo Finance API to deliver real-time stock and crypto data via user commands.",
      image: "/images/financebot.png    ",
      technologies: ["Python", "Docker", "yFinance"],
      githubLink: "https://github.com/ayazlockhat/finance-bot",
      demoLink: null,
    },
    {
      title: "Ethereum Bot",
      description:
        "A discord bot built using web API's and Javascript to provide users with current price and gas fees on Ethereum.",
      image: "/images/ethbot.jpg",
      technologies: ["JavaScript", "discord.js", "Web API"],
      githubLink: "https://github.com/ayazlockhat/Ethereum-Discord-Bot",
      demoLink: null,
    },
    {
      title: "IOS Stock Widget",
      description:
        "An IOS widget used to track stocks portfolio using JavaScript, JSON Endpoint API, Google Finance API, and Google Sheets.",
      image: "/images/widget.jpg",
      technologies: ["JavaScript", "JSON Endpoint API"],
      githubLink: "https://github.com/ayazlockhat/IOS-Stock-Widget-Sheets",
      demoLink: null,
    },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div id="projects">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>
        <div className="projects-content">
          {currentProjects.map((project, index) => (
            <FadeInSection key={index}>
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <FadeInSection>
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <div className="project-links">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon />
                        </a>
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LaunchIcon />
                          </a>
                        )}
                      </div>
                    </div>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </FadeInSection>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination-controls">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size={"medium"}
              sx={{
                "& .MuiPaginationItem-root": {
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "var(--slate)",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "var(--slate)",
                  },
                },
              }}
            />
          </div>
        )}
      </FadeInSection>
    </div>
  );
};

export default Projects;
