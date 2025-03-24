import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection.js";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi, I'm "}
            <span className="intro-name">{"Ayaz"}</span>
            {"!"}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">
            Developer | Problem solver | Student
          </div>
          <div className="intro-desc">
            Computer Science student @ McMaster. I enjoy solving real problems
            through code - and constantly learning to build what’s next.
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
