import ProjectsList from "../components/ProjectsList.jsx"
import {projects} from "../data/project.js"

const Projects = () => {
  console.log(projects)
  return ( 
    <main>
      <ProjectsList projects={projects} />
    </main>
  )
}
 
export default Projects