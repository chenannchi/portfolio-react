import { findProject } from "../utilities/findProject";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  let projectDetails = useParams()
  const project = findProject(projectDetails.projectDetails)
  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="img" style={{width:"300px"}} />
      <button>GitHub Repository</button>
      <button>Deployed Application</button>
    </main>
  );
}

export default ProjectDetails;