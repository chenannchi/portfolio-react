import { Link } from "react-router-dom"
import styles from "../About/About.module.css"

const About = ({ handleLanguageChange, isLanguageEng }) => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.section}>
        <div className={styles.brandStatementContainer}>
          {isLanguageEng ?
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
            :
            <div className={styles.brandStatement}>
              <div>關於我</div>
              <p>
                身為一位擁有醫務管理以及資訊工程背景的軟體工程師，我擁有謹慎且細心的做事態度，以及主動學習的精神。
                <br />
                <br />
                我擅長問題解決以及跨專業合作，除此之外，熟悉的技術包刮HTML、CSS、JS、MongoDB等工具來建置網站專案。
                <br />
                <br />
                我的目標為設計以及建置使使用者能更有效且容易獲取資訊的網站。
                <br />
              </p>
              <div className={styles.links}>
                <Link to="../projects"><div className={styles.link}>專案作品集</div></Link>
                <Link to="../contact"><div className={styles.link}>聯絡我</div></Link>
              </div>
            </div>
          }
        </div>
        <img className={styles.profileImage} src="./images/photo2.jpg" alt="profile" />
      </div>
    </main>
  )
}

export default About