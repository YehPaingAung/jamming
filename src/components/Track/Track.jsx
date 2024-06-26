import React from "react";
import styles from "./Track.module.css";

export const Track = ({ track, onAddTrack }) => {
  const handleClick = () => {
    if (!track) return;
    onAddTrack(track);
  };
  return (
    <div>
      <div>
        <div className={styles.trackContainer}>
          <div className={styles.txtContainer}>
            <h4>{track.name}</h4>
            <p>
              {track.author} | {track.album}
            </p>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={handleClick}>
              <i className="fa-solid fa-plus plus-icon"></i>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
