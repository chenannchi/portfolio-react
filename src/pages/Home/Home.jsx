import styles from "../Home/Home.module.css"

const Home = () => {
  return (
    <main>
      <div className={styles.homeImage}>
        <img className={styles.profile} src="./images/photo2.jpg" alt="profile" />
        <div>
          <div className={styles.titleContainer}>
            <div id={styles.welcome}>Welcome to my portfolio!</div>
          </div>
          <div className={styles.titleContainer}>
            <div id={styles.name}>I'm&nbsp;<b>Anchi Chen</b>.</div>
          </div>
          <div className={styles.titleContainer}>
            <div id={styles.title}>---- A Full-Stack Software Engineer!</div>
          </div>
        </div>
      </div>

      {/* <About /> */}
    </main>
  )
}

export default Home