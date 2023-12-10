import React from "react";
import "../stylesheets/Header.css";
import logomg from "../images/alertmgs.svg";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function Header() {
  return (
    <>
      <Row className="vh-100">
        <Col md={6}>
          <img className="header__img" src={logomg} alt="" />
        </Col>
        <Col
          md={6}
          className="d-flex  justify-content-center align-items-center flex-column"
        >
          <div>
            <h1 className="text-light">EMANUEL RIGO</h1>
            <h1 className="text-light">
              <span>&#160;</span>&lt;/DEV&gt; ..
            </h1>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Header;
