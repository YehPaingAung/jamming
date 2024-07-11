import React from "react";
import styles from "./Button.module.css";

export const RemoveButton = ({ onRemoveTrack, track }) => {
  const handleClick = () => {
    onRemoveTrack(track.id);
  };
  return (
    <button onClick={handleClick} className={styles.btn}>
      <i class="fa-solid fa-minus"></i>
    </button>
  );
};
