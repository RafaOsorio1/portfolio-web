import React from "react";
import { Avatar } from "../Avatar/Avatar";
import "./description.css";
export const Description = () => {
  return (
    <section className="description-cont">
      <article className="cont-text-description">
        <p className="title-description">
          Hola, <span className="name-color"> Soy Rafa</span>👋
        </p>
        <p className="text-description">
          Soy un programador front-end autodidacta, apasionado de la tecnología
          y del desarrollo web, con enfoque en HTML, CSS, JavaScript,
          TypeScript, React, Redux Toolkit y React-Router-Dom. Estoy en busca de
          nuevos proyectos que me permitan crecer en este maravilloso mundo del
          desarrollo web.
        </p>
      </article>
      <article className="cont-avatar-desc">
        <Avatar></Avatar>
      </article>
      <article className="cont-redes">
          <img
            className="btn-pill pulse"
            src="../src/assets/Facebook96.svg"
            alt="Facebook"
          />
          <img
            className="btn-pill pulse"
            src="../src/assets/Linkedin96.svg"
            alt="Linkedin"
          />
          <img
            className="btn-pill pulse"
            src="../src/assets/Twitter96.svg"
            alt="Twitter"
          />
      </article>
    </section>
  );
};
