import React from "react";
import "../stylesheets/Main.css";
import Skills from "./Skills";

function Main() {
  return (
    <main>
      <div className="main__personal-info">
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
      </div>
      <Skills></Skills>
    </main>
  );
}

export default Main;
