import styles from "./Button.module.css";

export default function Button({ classes, type, href, text }) {
  return (
    <a href={href}>
      <button type={type} className={`${styles.button} ${classes}`}>
        <span>{text}</span>
      </button>
    </a>
  );
}
