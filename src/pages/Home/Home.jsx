import styles from "../Home/Home.module.css"
// import About from "../About/About"

const Home = () => {
  return (
    <main>
      <div className={styles.homeImage}>
        <div className={styles.titleContainer}>
          <div id={styles.welcome}>Welcome to my portfolio!</div>
        </div>
        <img className={styles.profile} src="./images/photo.jpg" alt="profile" />
        <div className={styles.titleContainer}>
          <div id={styles.name}>Anchi Chen</div>
        </div>
        <div className={styles.titleContainer}>
          <div id={styles.title}>Software Engineer</div>
        </div>

      </div>

      {/* <About /> */}
    </main>
  )
}

export default Home