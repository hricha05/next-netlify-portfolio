import styles from './Footer.module.css';

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				Made with grit, determination and{' '}
				<img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for
				you
			</footer>
		</>
	);
}
