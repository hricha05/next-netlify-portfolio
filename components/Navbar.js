import styles from "/components/Navbar.module.css";

export default function Navbar({logo}) {
	return (
		<nav classname={styles.root}>
			<h1 className={styles.logo}>{logo}</h1>
			<ol className={styles.navMenu}>
				<li className={styles.navLink}><a href="#">About</a></li>
				<li className={styles.navLink}><a href="#">Projects</a></li>
				<li className={styles.navLink}><a href="#">Contact</a></li>
			</ol>
            <div className={styles.resume}><a href="#">Resume</a></div>
		</nav>
	);
}
