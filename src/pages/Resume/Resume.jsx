import styles from "../Resume/Resume.module.css"

const Resume = ({isLanguageEng, handleLanguageChange}) => {

  return (
    <main className={styles.pageContainer}>
      <div>
        {/* <a href="Anchi Chen Resume.pdf" download>Resume</a> */}
        {isLanguageEng?<iframe src="resumes/Anchi Chen - Resume(English version).pdf" title="resume" id={styles.resume} 
        ></iframe>:<iframe src="resumes/Anchi Chen - Resume(Mandarin version).pdf" title="resume" id={styles.resume} 
        ></iframe>}
      </div>
    </main>
  )
}

export default Resume