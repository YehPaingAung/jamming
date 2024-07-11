import React from "react";
import styles from "./Button.module.css";

export const AddButton = ({ track, onAddTrack }) => {
  const handleClick = () => {
    if (!track) return;
    onAddTrack(track);
  };
  return (
    <button onClick={handleClick} className={styles.btn}>
      <i class="fa-solid fa-plus"></i>
    </button>
  );
};
