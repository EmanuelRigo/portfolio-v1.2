import React from "react";
import "../stylesheets/Header.css";
import logomg from "../images/alertmgs.svg";
import { Container, Row, Col, Image } from "react-bootstrap";

function Header() {
  return (
    <>
{/*       <div className="header">
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
      </div> */}

     
        <Row className="mb-4 h-100">
          <Col md={6}>
         
        <Image style={{width: "100%"}} src="images/alertmgs.svg"></Image>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <h1>EMANUEL RIGO</h1>
            <h1>
              <span>&#160;</span>&lt;/DEV&gt; ..
            </h1>
          </Col>
        </Row>
    
    </>
  );
}

export default Header;
