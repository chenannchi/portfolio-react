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
                        Home
                    </Link>
                </li>

                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>

                <li>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </li>

                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to='/resume'>
                        Resume
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