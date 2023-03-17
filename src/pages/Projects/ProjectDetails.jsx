import { findProject } from "../../utilities/findProject";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import styles from "../Projects/Project.module.css"
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
  let projectDetails = useParams()
  const project = findProject(projectDetails.projectDetails)
  return (
    <main className={styles.pageContainer}>
      <div className={styles.container}>
        <h1>{project.title}</h1>
        <img src={project.image} alt="img"/>
        <p>{project.description}</p>
        <div className={styles.actions} >
          <Link to='/projects'>
            <FaArrowLeft style={{"font-size":"30px"}}/>
            {/* <button>Return</button> */}
          </Link>
          <a href={project.repositoryLink} target="_blank" rel="noreferrer">
            <button>GitHub Repository</button>
          </a>
          <a href={project.deploymentLink} target="_blank" rel="noreferrer">
            <button>Deployed Application</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;