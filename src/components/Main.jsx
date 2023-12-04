import React from "react";
import "../stylesheets/Main.css";
import Skills from "./Skills";
import { Row, Col } from "react-bootstrap";

function Main() {
  return (
    <main>
{/*       <div className="main__personal-info">
        <div className="main__infoa">
          <div className="main__info">
            <h2>ABOUT ME</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              dolor vero quidem corporis consequuntur odit exercitationem modi
              nesciunt cum molestiae omnis veniam saepe, numquam ratione quae
              repellat dolore maiores quas.
            </p>
          </div>
          <div className="main__img"></div>
        </div>
      </div> */}
      <Row>
        <Col md={8}>  <h2>ABOUT ME</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              dolor vero quidem corporis consequuntur odit exercitationem modi
              nesciunt cum molestiae omnis veniam saepe, numquam ratione quae
              repellat dolore maiores quas.
            </p></Col>
        <Col md={4}>
        <div className="main__img"></div>
        </Col>
      </Row>
      <Skills></Skills>

    </main>
  );
}

export default Main;
