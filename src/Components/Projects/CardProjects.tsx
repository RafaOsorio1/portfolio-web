import React from "react";
import "./cardprojects.css";

export const CardProjects = (props: { img: string }) => {
  return (
    <article className="cont-project-card">
      <div className="cont-img">
        <img src={props.img} alt="Proyecto #1" />
      </div>
      <div className="cont-text-projects">
        <div className="title-tag">
          <h4 className="card-title">Proyecto 1</h4>
          <span className="text-react">
            <strong>React</strong>
          </span>
          <span className="text-typescript">
            <strong>Typescript</strong>
          </span>
          <span className="text-redux">
            <strong>Redux-Toolkit</strong>
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          bibendum. Nunc non posuere consectetur, justo erat semper enim, non
          hendrerit dui odio id enim.
        </p>
      </div>
    </article>
  );
};
