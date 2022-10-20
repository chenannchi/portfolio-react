import { projects } from "../../src/data/project"
import { findProject } from "../utilities/findProject";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  let projectDetails = useParams()
  const project = findProject(projectDetails.projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="img" />
      <button>GitHub Repository</button>
      <button>Deployed Application</button>
    </>
  );
}

export default ProjectDetails;