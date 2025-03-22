import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  //   backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: 400,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid var(--slate)`,
}));

const JobList = () => {
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "ATS Automation": {
      jobTitle: "Software Developer Co-op @",
      duration: "Jan. 2024 - Dec. 2024",
      desc: [
        "Built user-friendly interfaces with React, TypeScript, CSS, and SCSS, integrating APIs using React hooks and Redux.",
        "Developed backend services with C# and SQL, leveraging Docker for local environments and ensuring smooth API integration.",
        "Collaborated in sprint workflows via Azure DevOps, managing tasks, reviewing code, and optimizing team efficiency.",
      ],
    },
    "SAS Institute": {
      jobTitle: "Assistant Technical Consultant Co-op @",
      duration: "May 2022 - Aug. 2022",
      desc: [
        "Enhanced proficiency in SQL and SAS programming languages through continuous training and development, contributing to advanced skills in data manipulation and analysis.",
        "Conducted analysis on large datasets utilizing SAS Visual Analytics to identify trends and insights, showcasing proficiency in advanced data visualization techniques.",
        "Improved data quality and integrity through regular audits and evaluations.",
      ],
    },
    "Recite Together": {
      jobTitle: "Web Project Manager Intern @",
      duration: "May 2020 - Aug. 2020",
      desc: [
        "Contributed to planning and designing a user-friendly company website for enhanced customer experience using modern design principles.",
        "Collaborated across teams to promptly resolve website issues, maintaining an up-to-date log for efficient problem-solving.",
        "Led project planning, execution, and monitoring, ensuring projects were completed on time and within budget constraints.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Root>
      <StyledTabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </StyledTabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </Root>
  );
};

export default JobList;
