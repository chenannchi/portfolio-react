import { projects } from "../../src/data/project"

const ProjectDetails = () => {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt="img" />
      <button>GitHub Repository</button>
      <button>Deployed Application</button>
    </>
  );
}

export default ProjectDetails;