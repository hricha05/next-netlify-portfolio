import styles from "/components/Navbar.module.css";

export default function Navbar({logo}) {
	return (
		<div>
			<nav classname={styles.root}>
				<h1 className={styles.logo}>{logo}</h1>
				{/* <ol className={styles.navMenu}>
					<li className={styles.navLink}><a href="#"></a></li>
					<li className={styles.navLink}><a href="#"></a></li>
					<li className={styles.navLink}><a href="#"></a></li>
				</ol> */}
        	    <div className={styles.resume}><a href="#"></a></div>
			</nav>
		</div>
	);
}
