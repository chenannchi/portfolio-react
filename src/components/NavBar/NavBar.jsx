import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch"

function NavBar({ isLanguageEng, handleLanguageChange }) {
    return (
        <nav className={styles.navbar}>
            <ul>
                {/* <li>
                    <Link to='/'>
                        Anchi Chen
                    </Link>
                </li> */}

                <li>
                    <Link to='/home'>
                        {isLanguageEng ?
                            "Home" : "首頁"
                        }
                    </Link>
                </li>

                <li>
                    <Link to='/about'>
                        {isLanguageEng ? "About" : "關於"}
                    </Link>
                </li>

                <li>
                    <Link to='/projects'>
                        {isLanguageEng?"Projects":"專案作品集"}
                    </Link>
                </li>

                <li>
                    <Link to='/contact'>
                        {isLanguageEng?"Contact":"聯絡我"}
                    </Link>
                </li>

                <li>
                    <Link to='/resume'>
                        {isLanguageEng?"Resume":"履歷"}
                    </Link>
                </li>

                {/* <li>
                    <a href="Anchi-Chen-Resume.pdf" className={styles.resumeLink} target="_blank">Resume</a>
                </li> */}
                <LanguageSwitch isLanguageEng={isLanguageEng} handleLanguageChange={handleLanguageChange} />
            </ul>
        </nav>
    )
}

export default NavBar