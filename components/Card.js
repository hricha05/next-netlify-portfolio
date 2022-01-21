import styles from '/components/Card.module.css';

export default function Card({ title }) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
		</div>
	);
}
