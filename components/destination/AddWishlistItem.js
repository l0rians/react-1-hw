"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );

  const [wishlistItem, setWishlistItem] = useState("");

  const handleThumbnailChange = (event) => {
    onThumbnailChange(event.target.value);
  };

  const handleWishlistItemChange = (event) => {
    setWishlistItem(event.target.value);
  };

  const onAddItemPressed = () => {
    const finalThumbnail =
      thumbnail === "custom" ? "/destination/image-europa.png" : thumbnail;
    if (wishlistItem) {
      onAddWishlistItem({ name: wishlistItem, thumbnail: finalThumbnail });

      setWishlistItem("");
      onThumbnailChange("");
    }
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>

      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={wishlistItem}
        onChange={handleWishlistItemChange}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={handleThumbnailChange}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
        <option value="custom">CUSTOM PLANET</option>
      </select>

      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};

export default AddWishlistItem;
