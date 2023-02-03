import { Link } from "react-router-dom";
import { hyphenateWord } from "../../utilities/hyphenateWords";
import styles from "../Projects/Projects.module.css"

const ProjectPreview = (props) => {
  return (
    <Link
      to={`/projects/${hyphenateWord(props.project.title)}`}
    >
      <div className={styles.container}>
        <img
          src={props.project.image}
          alt={props.project.title}
        />
        <div id={styles.title}>
          <div>
            {props.project.title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectPreview;