import { Link } from "react-router-dom";
import { hyphenateWord } from "../utilities/hyphenateWords";
const ProjectPreview = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt={props.title}
      />

      <section>
        <h3>
          <Link
            to={`/projects/${hyphenateWord(props.title)}`}
          >
            <button>
              Learn more
            </button>
          </Link>
        </h3>
      </section>
    </div>
  );
}

export default ProjectPreview;