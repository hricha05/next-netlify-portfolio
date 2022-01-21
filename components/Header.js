import styles from "./Header.module.css";

export default function Header({ name, tagline }) {
	return (
		<div>
			<h1 classname={styles.title}>
				Hi, I'm <span className={styles.name}>{name}</span>
			</h1>
			<h2 classname={styles.tagline}>{tagline}</h2>
		</div>
	);
}
