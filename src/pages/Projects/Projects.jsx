import ProjectsList from "../../components/Projects/ProjectsList.jsx"
import {projects} from "../../data/project.js"
import styles from "../Projects/Project.module.css"

const Projects = () => {
  return ( 
    <main className={styles.pageContainer}>
      <ProjectsList projects={projects} />
    </main>
  )
}
 
export default Projects