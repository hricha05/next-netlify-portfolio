import styles from '/components/Navigation.module.css';

export default function Navigation() {
	return (
		<nav classname={styles.fixed}>
			<h1 className={styles.logo}>HR</h1>
			<ul className={styles.nav - menu}>
				<li>About</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}
