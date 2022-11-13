import ProjectPreview from "./ProjectPreview";

const ProjectsList = (props) => {
  return ( 
    <>
      {props.projects.map((project, idx) => (
        // <li key={idx}>
          <ProjectPreview key={idx} project={project} />
        // </li>
      ))}
    </>
  );
}
 
export default ProjectsList;