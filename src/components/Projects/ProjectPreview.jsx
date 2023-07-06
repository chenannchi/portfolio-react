// import { Link } from "react-router-dom";
// import { hyphenateWord } from "../../utilities/hyphenateWords";
import styles from "../Projects/Projects.module.css"

const ProjectPreview = (props) => {
  return (
    <div className={styles.container}>
      {/* <Link
        to={`/projects/${hyphenateWord(props.project.title)}`}
      > */}
      <img
        src={props.project.image}
        alt={props.project.title}
      />
      <div className={styles.title}>
        <div>
          {props.project.title}
        </div>
      </div>
      <div className={styles.tech}>
        {props.project.tech}
      </div>
      <div className={styles.actions} >
        <a href={props.project.repositoryLink} target="_blank" rel="noreferrer">
          <div>GitHub Repo</div>
        </a>
        <a href={props.project.deploymentLink} target="_blank" rel="noreferrer">
          <div>Demo</div>
        </a>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default ProjectPreview;