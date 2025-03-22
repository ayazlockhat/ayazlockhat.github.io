import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import FadeInSection from "./FadeInSection";
import "../styles/Experience.css";

// Experience data as an array of objects for simpler iteration.
const experienceData = [
  {
    company: "ATS Automation",
    jobTitle: "Software Developer Co-op @",
    duration: "Jan. 2024 - Dec. 2024",
    description: [
      "Built user-friendly interfaces with React, TypeScript, CSS, and SCSS, integrating APIs using React hooks and Redux.",
      "Developed backend services with C# and SQL, leveraging Docker for local environments and ensuring smooth API integration.",
      "Collaborated in sprint workflows via Azure DevOps, managing tasks, reviewing code, and optimizing team efficiency.",
    ],
  },
  {
    company: "SAS Institute",
    jobTitle: "Assistant Technical Consultant Co-op @",
    duration: "May 2022 - Aug. 2022",
    description: [
      "Enhanced proficiency in SQL and SAS programming languages through continuous training and development.",
      "Conducted analysis on large datasets utilizing SAS Visual Analytics to identify trends and insights.",
      "Improved data quality and integrity through regular audits and evaluations.",
    ],
  },
  {
    company: "Recite Together",
    jobTitle: "Web Project Manager Intern @",
    duration: "May 2020 - Aug. 2020",
    description: [
      "Planned and designed a user-friendly company website to enhance customer experience.",
      "Collaborated across teams to resolve website issues and maintain an up-to-date log for efficient troubleshooting.",
      "Led project planning, execution, and monitoring to ensure projects were completed on time and within budget.",
    ],
  },
];

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ experience</span>
        </div>
        <div className="experience-content">
          <div className="experience-card">
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                height: "100%",
              }}
            >
              <Tabs
                orientation={isMobile ? "horizontal" : "vertical"}
                variant={isMobile ? "fullWidth" : "scrollable"}
                value={selectedTab}
                onChange={handleTabChange}
                sx={{
                  borderRight: isMobile ? 0 : 1,
                  borderColor: "divider",
                }}
              >
                {experienceData.map((item, index) => (
                  <Tab
                    key={index}
                    label={item.company}
                    sx={isMobile ? { fontSize: "10px" } : {}}
                  />
                ))}
              </Tabs>
              {experienceData.map((item, index) => (
                <TabPanel key={index} value={selectedTab} index={index}>
                  <h3 className="joblist-job-title">
                    {item.jobTitle}{" "}
                    <span className="joblist-job-company">{item.company}</span>
                  </h3>
                  <div className="joblist-duration">{item.duration}</div>
                  <ul className="job-description">
                    {item.description.map((desc, i) => (
                      <FadeInSection key={i} delay={`${(i + 1) * 100}ms`}>
                        <li>{desc}</li>
                      </FadeInSection>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </Box>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Experience;
