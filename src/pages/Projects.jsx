import ProjectsList from "../components/ProjectsList.jsx"
import {projects} from "../data/project.js"

const Projects = () => {
  console.log(projects)
  return ( 
    <>
      <ProjectsList projects={projects} />
    </>
  )
}
 
export default Projects