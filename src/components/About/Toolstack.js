import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos size={50} />
        <h4>macOS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={50} />
        <h4>Visual Studio Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman size={50} />
        <h4>Postman</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack size={50} />
        <h4>Slack</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;