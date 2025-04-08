import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const About = () => {
  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-me-content">
          <div className="about-me-card">
            <FadeInSection>
              <img alt="ayaz" src="/images/selfimage.jpg" />
              <h3>Ayaz Lockhat</h3>
              <p>
                Computer Science student with a passion for programming and
                expanding knowledge.
              </p>
              <div className="info">
                <SchoolOutlinedIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://future.mcmaster.ca/programs/computer-science/"
                >
                  McMaster University
                </a>
              </div>
              <div className="info">
                <HomeOutlinedIcon />
                <span>Ontario, Canada</span>
              </div>
              <div className="info">
                <EmailOutlinedIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:ayazzlockhat@gmail.com"
                >
                  ayazzlockhat@gmail.com
                </a>
              </div>
              <div className="info">
                <DescriptionOutlinedIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="resources/AyazLockhat_Resume.pdf"
                >
                  Resume
                </a>
              </div>
            </FadeInSection>
          </div>

          <div className="about-me-card">
            <FadeInSection>
              <h3>Who I am</h3>
              <p>
                Hi, my name is <b>Ayaz Lockhat</b>, I am currently studying
                <b> Computer Science</b> at <b> McMaster University</b>.
                Everyday I work towards my goal of becoming a Computer
                Scientist. I enjoy expanding my programming knowledge and adding
                valuable information to my toolkit.
              </p>
              <p>
                During my spare time, I enjoy going on hikes, playing video
                games, spending time with family and friends, and travelling
                around the world.
              </p>
              <p>
                These are some languages/technologies I've been working with:
              </p>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>C</li>
                <li>SQL</li>
                <li>Git</li>
                <li>C#</li>
                <li>Typescript</li>
                <li>Java</li>
                <li>SAS</li>
              </ul>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
