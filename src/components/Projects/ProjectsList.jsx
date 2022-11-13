import ProjectPreview from "./ProjectPreview";
import styles from "../Projects/Projects.module.css"

const ProjectsList = (props) => {
  return ( 
    <div className={styles.cardsContainer}>
      {props.projects.map((project, idx) => (
        // <li key={idx}>
          <ProjectPreview key={idx} project={project} />
        // </li>
      ))}
    </div>
  );
}
 
export default ProjectsList;