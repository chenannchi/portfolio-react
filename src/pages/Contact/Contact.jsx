import styles from "../Contact/Contact.module.css"

const Contact = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.container}>
        <h2>Feel free to <br />contact & follow me!</h2>
        <div className={styles.icons}>
          <a href="mailto: anchichenusa@gmail.com">
            <img src="https://cdn-icons-png.flaticon.com/128/8760/8760637.png" alt="email icon" />
            {/* mail */}
          </a>
          <a href="https://github.com/chenannchi">
            <img src="https://cdn-icons-png.flaticon.com/128/3488/3488426.png" alt="github icon" />
            {/* GitHub */}
          </a>
          <a href="https://www.linkedin.com/in/anchi-chen/">
            <img src="https://cdn-icons-png.flaticon.com/128/3488/3488326.png" alt="linkedin icon" />
            {/* Linkedin */}
          </a>
        </div>
      </div>
    </main>
  )
}

export default Contact