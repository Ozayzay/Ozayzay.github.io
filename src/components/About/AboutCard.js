import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ozafa Yousuf Mahmood </span>
            from <span className="purple"> Vancouver, Canada.</span>
            <br />
            I am currently working part time with the IT services Department at SFU.
            <br />
            I am a Computer Science student at Simon Fraser University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mountain Biking
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching obscure films from the 60s
            </li>
            <li className="about-activity">
              <ImPointRight /> Listning to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You have power over your mind - not outside events. Realize this, and you will find strength."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
