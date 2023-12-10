import React from "react";
import "../stylesheets/Project.css";

function Project({ image, name, description, icons }) {
  return (
    <div className="project rounded">
      <img src={image} alt="" />
      <div className="capa">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="project__container-icons">{icons}</div>
      </div>
    </div>
  );
}

export default Project;
