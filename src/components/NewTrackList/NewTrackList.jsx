import React from "react";
// import { Track } from "../Track/Track";
import styles from "./NewTrackList.module.css";

export const NewTrackList = ({
  trackList,
  onRemoveTrack,
  onAddPlayListName,
  playListName,
  setPlayListName,
  onPlayList,
}) => {
  const handleChange = (e) => {
    onAddPlayListName(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!playListName) return;
    if (!trackList.length) return;
    onPlayList();
    setPlayListName(e.target.value);
    setPlayListName("");
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={playListName} />
      {/* {trackList.map((track) => (
        <Track key={track.id} track={track} onRemoveTrack={onRemoveTrack} />
      ))} */}
      {trackList.map((track) => (
        <div key={track.id}>
          <div>
            <div className={styles.trackContainer}>
              <div className={styles.txtContainer}>
                <h4>{track.name}</h4>
                <p>
                  {track.author} | {track.album}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <button
                  className={styles.btn}
                  onClick={() => onRemoveTrack(track.id)}
                >
                  <i className="fa-solid fa-minus plus-icon"></i>
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}
      <button onClick={handleClick}>Make a new playlist</button>
    </div>
  );
};
