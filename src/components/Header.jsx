import React from "react";
import "../stylesheets/Header.css";
import logomg from "../images/alertmgs.svg";
import { Container, Row, Col, Image } from "react-bootstrap";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <img className="header__img" src={logomg} alt="" />
        </div>
        <div className="header__container">
          <div className="header__title-container">
            <h1>EMANUEL RIGO</h1>
            <h1>
              <span>&#160;</span>&lt;/DEV&gt; ..
            </h1>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col className="col-6">
            <img src={logomg} alt="" />
          </Col>
          <Col className="col-6">
            <h1>EMANUEL RIGO</h1>
            <h1>
              <span>&#160;</span>&lt;/DEV&gt; ..
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
