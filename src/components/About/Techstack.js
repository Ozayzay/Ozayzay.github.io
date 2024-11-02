import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiNumpy, SiScikitlearn, SiC } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus size={50} /> {/* C++ Icon */}
        <h4>C++</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC size={50} /> {/* C Icon */}
        <h4>C</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size={50} /> {/* Python Icon */}
        <h4>Python</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={50} /> {/* JavaScript Icon */}
        <h4>JavaScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs size={50} /> {/* Node.js Icon */}
        <h4>Node.js</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit size={50} /> {/* Git Icon */}
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb size={50} /> {/* MongoDB Icon */}
        <h4>MongoDB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy size={50} /> {/* Numpy Icon */}
        <h4>Numpy</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn size={50} /> {/* Scikit Learn Icon */}
        <h4>Scikit Learn</h4>
      </Col>
    </Row>
  );
}

export default Techstack;