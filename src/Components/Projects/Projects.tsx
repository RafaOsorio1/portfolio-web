import "./projects.css";
import { CardProjects } from "./CardProjects";
type Project = {
  id: number;
  name: string;
  img: string;
  tools: {
    tool1: string;
    tool2: string;
    tool3: string;
    tool4: string;
    tool5: string;
    tool6: string;
  };
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project-1",
    img: "../src/assets/project-web-design.png",
    tools: {
      tool1: "React",
      tool2: "Redux-Toolkit",
      tool3: "Typescript",
      tool4: "Javascript",
      tool5: "Html & CSS",
      tool6: "React-router-dom",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissebibendum. Nunc non posuere consectetur, justo erat semper enim, no hendrerit dui odio id enim.",
  },
  {
    id: 2,
    name: "Project-2",
    img: "../src/assets/project-maps.png",
    tools: {
      tool1: "React",
      tool2: "Redux-Toolkit",
      tool3: "Typescript",
      tool4: "Javascript",
      tool5: "Html & CSS",
      tool6: "React-router-dom",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissebibendum. Nunc non posuere consectetur, justo erat semper enim, no hendrerit dui odio id enim.",
  },
  {
    id: 3,
    name: "Project-3",
    img: "../src/assets/project-fire.png",
    tools: {
      tool1: "React",
      tool2: "Redux-Toolkit",
      tool3: "Typescript",
      tool4: "Javascript",
      tool5: "Html & CSS",
      tool6: "React-router-dom",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissebibendum. Nunc non posuere consectetur, justo erat semper enim, no hendrerit dui odio id enim.",
  },
];

export const Projects = () => {
  return (
    <section className="projects-cont">
      <article className="title-projects">
        <p>
          <strong>
            Recents <span className="color-word"> Projects</span>
          </strong>
        </p>
      </article>
      {projects.map((project: Project) => {
        return <CardProjects key={project.id} img={project.img}></CardProjects>;
      })}
    </section>
  );
};
