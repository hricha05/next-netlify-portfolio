import styles from "/components/Navbar.module.css";
import Link from 'next/link';
import  { BsFillFileEarmarkPdfFill } from "react-icons/bs"

export default function Navbar({logo}) {
	return (
        <div className={styles.header}>
            <h1 className={styles.logo}><a>{logo}</a></h1>
            <nav className={styles.navigation}>
                <ol className={styles.navigation_menu}>
                    <li><Link href="/"><a className={styles.menu__link}>About</a></Link></li>
                    <li><Link href="/"><a className={styles.menu__link}>Projects</a></Link></li>
                    <li><Link href="/"><a className={styles.menu__link}>Contact</a></Link></li>
                <div className={styles.resume}>
                <a href="#" className={styles.resume_link}>Resume</a>
                {/* <BsFillFileEarmarkPdfFill className={styles.resume_svg}/> */}
                </div>
                </ol>
            </nav>
        </div>
	);
}
