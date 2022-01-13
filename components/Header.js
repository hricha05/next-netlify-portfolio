import styles from './Header.module.css';

export default function Header({ name, tagline }) {
	return (
		<div>
			<h1 className={styles.title}>
				Hi, I'm <span className={styles.name}>{name}</span>
			</h1>
			<h2 className={styles.tagline}>{tagline}</h2>
		</div>
	);
}
