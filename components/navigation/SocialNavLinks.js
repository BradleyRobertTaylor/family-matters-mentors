import Icon from "./../icons/Icon";
import styles from "./SocialNavLinks.module.css";

export default function SocialNavLinks({ classes }) {
  return (
    <div className={`${styles["social-link-wrapper"]} ${classes}`}>
      <Icon iconType="facebook" />
      <Icon iconType="instagram" />
      <Icon iconType="youtube" />
    </div>
  );
}
