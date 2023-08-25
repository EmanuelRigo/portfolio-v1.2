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
import Project from "./Project";
import { FaBootstrap } from "react-icons/fa";
import { useState } from "react";

function Skills() {
  const [nombreLenguaje, setNombreLenguaje] = useState();
  const handleChangeName = (e) => {
    const copiaNombreLenguaje = e.target.dataset.nombre;
    setNombreLenguaje(copiaNombreLenguaje);
  };

  return (
    <div className="skills">
      <h2>Habilidades en {nombreLenguaje} </h2>
      <div className="skills__container">
        <div
          data-nombre="Html"
          onMouseEnter={handleChangeName}
          className="cajas"
        >
          <AiFillHtml5 className="icono html"></AiFillHtml5>
        </div>
        <div
          className="cajas"
          data-nombre="Css"
          onMouseEnter={handleChangeName}
        >
          <BiLogoCss3 className="icono css"></BiLogoCss3>
        </div>
        <div
          className="cajas"
          data-nombre="JavaScript"
          onMouseEnter={handleChangeName}
        >
          <BiLogoJavascript className="icono js"></BiLogoJavascript>
        </div>
        <div
          className="cajas"
          data-nombre="ReactJs"
          onMouseEnter={handleChangeName}
        >
          <BiLogoReact className="icono react"></BiLogoReact>
        </div>
        <div
          className="cajas"
          data-nombre="NodeJs"
          onMouseEnter={handleChangeName}
        >
          <BiLogoNodejs className="icono nodejs"></BiLogoNodejs>
        </div>
        <div
          className="cajas"
          data-nombre="Bootstrap"
          onMouseEnter={handleChangeName}
        >
          <FaBootstrap className="icono bootstrap"></FaBootstrap>
        </div>
        <div
          className="cajas"
          data-nombre="Tailwind"
          onMouseEnter={handleChangeName}
        >
          <BiLogoTailwindCss className="icono tailwind"></BiLogoTailwindCss>
        </div>
        <div
          className="cajas"
          data-nombre="Github"
          onMouseEnter={handleChangeName}
        >
          <AiFillGithub className="icono github"></AiFillGithub>
        </div>
        <div
          className="cajas"
          data-nombre="Git"
          onMouseEnter={handleChangeName}
        >
          <BiLogoGit className="icono git"></BiLogoGit>
        </div>
        <div
          className="cajas"
          data-nombre="Firebase"
          onMouseEnter={handleChangeName}
        >
          <BiLogoFirebase className="icono firebase"></BiLogoFirebase>
        </div>
      </div>
      <div className="skills__proyects-container">
        <div className="skills__proyects">
          <div className="skills__proyects-title">
            <h3>proyectos pequeños</h3>
          </div>
          <Project
            image={"../images/cafe 00.png"}
            name={"Cafe"}
            description={
              "Pagina de una cafeteria estilo oriental en Buenos Aires"
            }
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <FaBootstrap className="project__icon" />,
            ]}
          ></Project>
        </div>
        <div className="skills__proyects">
          <div className="skills__proyects-title">
            <h3>proyectos grandes</h3>
          </div>
          <Project
            image={"../images/lab 01.png"}
            name={"Lab"}
            description={"Pagina y sistema para un laboratorio clinico"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <FaBootstrap className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
            ]}
          ></Project>
          <Project
            image={"../images/videoteca 03.png"}
            name={"Videoteca"}
            description={"Pagina con informacion de peliculas"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
            ]}
          ></Project>
        </div>
      </div>
    </div>
  );
}

export default Skills;
