import styles from "../About/About.module.css"

const About = () => {
  return ( 
    <main>
      <div className={styles.aboutImg}>
        <img className={styles.profileImage} src="./images/photo.jpg" alt="profile" />
      </div>
      <div className={styles.brandStatement}>
        <p>
        As a software engineer with a background in healthcare administration and computer science, I bring a detail-oriented and self-motivated mindset to what I build. 
        <br />
        <br />
        I aim to use creative problem-solving, and cross-functionally collaborating skills as well as multiple software development tools such as HTML, CSS, JS, and MongoDB to create valuable applications. 
        <br />
        <br />
        I am dedicated to designing and building websites to improve the way users access information.
        <br />
        </p>
      </div>
    </main>
  )
}

export default About