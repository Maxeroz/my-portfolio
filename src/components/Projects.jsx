import React from "react";

function Projects() {
  const projects = [
    {
      name: "Fast React Pizza App",
      url: "https://fastreactpizzaapprouter.netlify.app/",
    },
    {
      name: "Online Chat App using Firebase API",
      url: "https://velvety-moonbeam-9af80e.netlify.app/",
    },
    { name: "To Do List", url: "https://celadon-twilight-87b4f4.netlify.app/" },
    { name: "WorldWeise App", url: "https://worldwiseweb.netlify.app/" },
    {
      name: "Real Application, soccer tournament website",
      url: "https://thepfl.netlify.app/login",
    },
    { name: "To Do List", url: "https://celadon-twilight-87b4f4.netlify.app/" },
    {
      name: "Simple Store Website",
      url: "https://storeneoflex.netlify.app/",
    },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
