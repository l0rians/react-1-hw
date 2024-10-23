import styles from "./destination.module.css";

const PlanetWishlistItem = ({ name, onRemove, thumbnail }) => {
  console.log("Rendering wishlist item:", { name, thumbnail });
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>remove</button>
    </div>
  );
};

export default PlanetWishlistItem;
