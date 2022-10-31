import ProjectPreview from "./ProjectPreview";

const ProjectsList = (props) => {
  return ( 
    <>
      {props.projects.map((project, idx) => (
        // <li key={idx}>
          <ProjectPreview key={idx} title={project.title} image={project.image} />
        // </li>
      ))}
    </>
  );
}
 
export default ProjectsList;