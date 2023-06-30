import styles from "../Home/Home.module.css"

const Home = ({ handleLanguageChange, isLanguageEng }) => {
  return (
    <main>
      <div className={styles.homeImage}>
        <img className={styles.profile} src="./images/photo2.jpg" alt="profile" />
        <div>
          <div className={styles.titleContainer}>
            <div id={styles.welcome}>{isLanguageEng ? "Welcome to my portfolio!" : "歡迎來到我的作品集"}</div>
          </div>
          <div className={styles.titleContainer}>
            <div id={styles.name}>
              {isLanguageEng ?
                "I'm Anchi Chen." : "我是陳安琪!"
              }
            </div>
          </div>
          <div className={styles.titleContainer}>
            <div id={styles.title}>{isLanguageEng ? "---- A Full-Stack Software Engineer!" : "一位全端軟體工程師"}
            </div>
          </div>
        </div>
      </div>

      {/* <About /> */}
    </main>
  )
}

export default Home