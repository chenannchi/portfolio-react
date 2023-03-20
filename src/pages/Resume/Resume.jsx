import styles from "../Resume/Resume.module.css"

const Resume = () => {
  return (
    <main className={styles.pageContainer}>
      <div>
        {/* <a href="Anchi Chen Resume.pdf" download>Resume</a> */}
        <iframe src="Anchi-Chen-Resume.pdf" title="resume" id={styles.resume}
        ></iframe>
      </div>
    </main>
  )
}

export default Resume