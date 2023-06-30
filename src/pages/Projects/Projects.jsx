import ProjectsList from "../../components/Projects/ProjectsList.jsx"
import { projects } from "../../data/project.js"
import styles from "../Projects/Project.module.css"

const Projects = ({ handleLanguageChange, isLanguageEng }) => {
  return (
    <main className={styles.pageContainer}>
      <ProjectsList projects={projects} handleLanguageChange={handleLanguageChange} isLanguageEng={isLanguageEng} />
    </main>
  )
}

export default Projects