import { Link } from "react-router-dom"
import styles from "../About/About.module.css"

const About = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.section}>
        <div className={styles.brandStatementContainer}>
          <div className={styles.brandStatement}>
            <div>A little about me ...</div>
            <p>
              As a software engineer with a background in healthcare administration and computer science, I bring a detail-oriented and self-motivated mindset to what I build.
              <br />
              <br />
              I utilize creative problem-solving, and cross-functionally collaborating skills as well as multiple software development tools such as HTML, CSS, JS, and MongoDB to create valuable applications.
              <br />
              <br />
              I am dedicated to designing and building websites to improve the way users access information.
              <br />
            </p>
            <div className={styles.links}>
              <Link to="../projects"><div className={styles.link}>Projects</div></Link>
              <Link to="../contact"><div className={styles.link}>Contact</div></Link>
            </div>
          </div>
        </div>
        <img className={styles.profileImage} src="./images/photo2.jpg" alt="profile" />
      </div>
    </main>
  )
}

export default About