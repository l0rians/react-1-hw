import styles from "./Footer.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <>
      <li className={styles.socialItem}>
        <a href={url} target="_blank">
          <img src={icon} alt={`${title} icon`} className={styles.socialIcon} />
          {title}
        </a>
      </li>
    </>
  );
};
