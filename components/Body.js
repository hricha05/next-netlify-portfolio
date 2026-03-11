import styles from "./Body.module.css";
import Button from "./Button";

export default function Body({text}) {
    return (
        <div className={styles.body_container}>
            <p className={styles.body_text}>
                {text}
            </p>
        </div>
    )
};