import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu(props) {
  return (
    <button
      className={styles["hamburger-button"]}
      aria-controls="primary-navigation"
      aria-expanded="false"
      onClick={props.onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 010-1.99h8.01c.55 0 .995.445.995.995zM22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 110-1.99h18.01c.55 0 .995.446.995.995zm-.995-5.01a.995.995 0 000-1.99H8.995a.995.995 0 100 1.99h12.01z"></path>
      </svg>
    </button>
  );
}
