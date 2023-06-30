import styles from "../LanguageSwitch/LanguageSwitch.module.css"

const LanguageSwitch = ({isLanguageEng, handleLanguageChange}) => {
  return (
    <div className={styles.languageButton}>
      <button onClick={handleLanguageChange}>{isLanguageEng?"繁體中文":"English"}</button>
    </div>
  )
}

export default LanguageSwitch