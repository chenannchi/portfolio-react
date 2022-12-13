import { findProject } from "../../utilities/findProject";
import { useParams } from "react-router-dom";
import styles from "../Projects/Project.module.css"

const ProjectDetails = () => {
  let projectDetails = useParams()
  const project = findProject(projectDetails.projectDetails)
  return (
    <main className={styles.pageContainer}>
      <div className={styles.container}>
        <img src={project.image} alt="img"/>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div>
          <a href={project.repositoryLink}>
            <button>GitHub Repository</button>
          </a>
          <a href={project.deploymentLink}>
            <button>Deployed Application</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;