import React from "react";
import "../stylesheets/Main.css";
import Skills from "./Skills";
import ProjectContainer from "./ProjectContainer";
import { Row, Col, Image } from "react-bootstrap";

function Main() {
  return (
    <main className="py-5 row mx-1">
      <Skills></Skills>
      <ProjectContainer></ProjectContainer>
    </main>
  );
}

export default Main;
