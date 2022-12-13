import styles from "../Contact/Contact.module.css"
import { ContactUs } from "../../components/Contact/ContactUs"

const Contact = () => {
  return (
    <main className={styles.pageContainer}>
      <h1>Contact</h1>
      <div className={styles.container}>
        {/* <div> */}
        <ContactUs />
        {/* </div> */}
      </div>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2>Feel free to contact & follow me!</h2>
          <div className={styles.icons}>
            <a href="mailto: anchichenusa@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/128/8760/8760637.png" alt="email icon" />
            </a>
            <a href="https://github.com/chenannchi">
              <img src="https://cdn-icons-png.flaticon.com/128/3488/3488426.png" alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/anchi-chen/">
              <img src="https://cdn-icons-png.flaticon.com/128/3488/3488326.png" alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact