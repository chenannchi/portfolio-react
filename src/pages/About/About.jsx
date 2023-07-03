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
              <p id={styles.mandarinAbout}>
                &nbsp;&nbsp;&nbsp;&nbsp;畢業於台北醫學大學醫務管理學系，並同時擁有國立台北科技大學資工系的輔系。於大學期間，曾於萬芳醫院擔任專案管理實習生，以及商之器科技公司擔任R&D實習生。
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;於商之器科技實習期間，自主學習如何撰寫及測試網站。畢業後於美國General Assembly Bootcamp全職進修網站開發技術。期間，創建多項專案中，Giftology是印象最深刻的團體專案，此網站衷旨為希望藉由建立以及分享自己的願望清單達到貼心送禮以及降低資源浪費。Bootcamp結束後，曾參與雅詩蘭黛主辦的無障礙美妝網站開發黑客松，目前則是正在參與一項美國FDA與民間組織合作的三個月專案，與15位以上的團隊，包含軟體工程師、資料分析師、UX設計師、專案管理師，以及業界專業人士，合作開發一款可以讓使用者保存管理並且分享醫療紀錄的手機APP。
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;專案管理實習生的經驗，使我善於溝通。喜歡他人給予建議以及回饋，這能促使我在工作表現上更加精進。學習速度快速，且能立即將所學應用。喜歡規劃，做事細心謹慎。以上特質，相信我能成為一位優秀的軟體工程師。

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