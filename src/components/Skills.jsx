import React from "react";
import "../stylesheets/Skills.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoFirebase,
} from "react-icons/bi";

import { FaBootstrap } from "react-icons/fa";

function Skills() {
  return (
    <div className="skills">
      <h2>Habilidades en JavaScript</h2>
      <div className="skills__container">
        <div className="cajas">
          <AiFillHtml5 className="icono html"></AiFillHtml5>
        </div>
        <div className="cajas">
          <BiLogoCss3 className="icono css"></BiLogoCss3>
        </div>
        <div className="cajas">
          <BiLogoJavascript className="icono js"></BiLogoJavascript>
        </div>
        <div className="cajas">
          <BiLogoReact className="icono react"></BiLogoReact>
        </div>
        <div className="cajas">
          <BiLogoNodejs className="icono nodejs"></BiLogoNodejs>
        </div>
        <div className="cajas">
          <FaBootstrap className="icono bootstrap"></FaBootstrap>
        </div>
        <div className="cajas">
          <BiLogoTailwindCss className="icono tailwind"></BiLogoTailwindCss>
        </div>
        <div className="cajas">
          <AiFillGithub className="icono github"></AiFillGithub>
        </div>
        <div className="cajas">
          <BiLogoGit className="icono git"></BiLogoGit>
        </div>
        <div className="cajas">
          <BiLogoFirebase className="icono firebase"></BiLogoFirebase>
        </div>
      </div>
    </div>
  );
}

export default Skills;
