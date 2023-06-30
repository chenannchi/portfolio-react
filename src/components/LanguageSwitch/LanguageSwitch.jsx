import styles from "../LanguageSwitch/LanguageSwitch.module.css"

const LanguageSwitch = ({isLanguageEng, handleLanguageChange}) => {
  return (
    <div className={styles.languageButton}>
      <button onClick={handleLanguageChange}>{isLanguageEng?"English":"Mandarin"}</button>
    </div>
  )
}

export default LanguageSwitch