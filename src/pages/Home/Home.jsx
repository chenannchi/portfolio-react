import styles from "../Home/Home.module.css"
// import About from "../About/About"

const Home = () => {
  return (
    <main>
      <div className={styles.homeImage}>
        <img className={styles.profile} src="./images/photo.jpg" alt="profile" />
        <div>
          <div className={styles.titleContainer}>
            <div id={styles.welcome}>Welcome to my portfolio!</div>
          </div>
          <div className={styles.titleContainer}>
            <div id={styles.name}>I'm Anchi Chen.</div>
          </div>
          <div className={styles.titleContainer}>
            <div id={styles.title}>I'm a Software Engineer.</div>
          </div>
        </div>
      </div>

      {/* <About /> */}
    </main>
  )
}

export default Home