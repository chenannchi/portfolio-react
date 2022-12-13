import ProjectPreview from "./ProjectPreview";
import styles from "../Projects/Projects.module.css"

const ProjectsList = (props) => {
  return ( 
    <div className={styles.cardsContainer}>
      {props.projects.map((project, idx) => (
          <ProjectPreview key={idx} project={project} />
      ))}
    </div>
  );
}
 
export default ProjectsList;