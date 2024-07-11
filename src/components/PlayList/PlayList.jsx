import React, { useCallback } from "react";
import { TrackList } from "../TrackList/TrackList";
import styles from "./PlayList.module.css";

export const Playlist = ({
  trackList,
  onRemoveTrack,
  onNameChange,
  onSavePlayList,
}) => {
  const handleChange = useCallback(
    (e) => {
      onNameChange(e.target.value);
    },
    [onNameChange]
  );
  return (
    <div className={styles.playlist}>
      <input
        className={styles.playlistInput}
        type="text"
        onChange={handleChange}
        defaultValue={"New Playlist"}
      />
      <TrackList
        trackList={trackList}
        isRemovable={true}
        onRemoveTrack={onRemoveTrack}
      />
      <button className={styles.saveBtn} onClick={onSavePlayList}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};
