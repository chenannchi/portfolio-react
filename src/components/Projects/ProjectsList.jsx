import ProjectPreview from "./ProjectPreview";
import styles from "../Projects/Projects.module.css"

const ProjectsList = (props) => {
  return (
    <div id={styles.projectsContainer}>
      <div id={styles.personalProjects}>
        <div className={styles.projectsTitle}>
          {props.isLanguageEng?"Personal Projects":"個人專案"}
        </div>
        <div className={styles.cardsContainer}>
          {props.projects.map((project, idx) => (
            project.type === "personal" ? <ProjectPreview key={idx} project={project} /> : null
          ))}
        </div>
      </div>
      <div id={styles.groupProjects}>
        <div className={styles.projectsTitle}>
          {props.isLanguageEng?"Group Projects":"團體專案"}
        </div>
        <div className={styles.cardsContainer}>
          {props.projects.map((project, idx) => (
            project.type === "group" ? <ProjectPreview key={idx} project={project} /> : null
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;