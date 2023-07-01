import { Link } from "react-router-dom";
import { hyphenateWord } from "../../utilities/hyphenateWords";
import styles from "../Projects/Projects.module.css"

const ProjectPreview = (props) => {
  return (
    // <div>
    <div className={styles.container}>
      <Link
        to={`/projects/${hyphenateWord(props.project.title)}`}
      >
        <img
          src={props.project.image}
          alt={props.project.title}
        />
        <div id={styles.title}>
          <div>
            {props.project.title}
          </div>
        </div>
        <div className={styles.tech}>
          <div>
            {props.project.tech}
          </div>
        </div>
      </Link>
    </div>
    // </div>
  );
}

export default ProjectPreview;