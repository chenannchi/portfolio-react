import styles from "../Contact/Contact.module.css"
import { ContactUs } from "../../components/Contact/ContactUs"

const Contact = ({ handleLanguageChange, isLanguageEng }) => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.container}>
        <ContactUs handleLanguageChange = { handleLanguageChange} isLanguageEng={isLanguageEng } />
      </div>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2>{isLanguageEng?"Feel free to contact & follow me!":"歡迎聯絡或追蹤我!"}</h2>
          <div className={styles.icons}>
            <a href="mailto: anchichenusa@gmail.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/8760/8760637.png" alt="email icon" />
            </a>
            <a href="https://github.com/chenannchi" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/3488/3488426.png" alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/anchi-chen/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/3488/3488326.png" alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact