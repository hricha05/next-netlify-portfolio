import styles from './Button.module.css';

export default function Button({ link, text }) {
    return (
        <div className={styles.button_container}>
            <button className={styles.button_styles}>
                <a href={link}>{text}</a>
            </button>
        </div>
    )
};