import React from "react";
import { RemoveButton } from "../Buttons/RemoveButton";
import { AddButton } from "../Buttons/AddButton";
import styles from "./Track.module.css";

export const Track = ({ track, isRemovable, onAddTrack, onRemoveTrack }) => {
  return (
    <div>
      <div className={styles.track}>
        <div>
          <h4>{track.name}</h4>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        <div>
          {isRemovable ? (
            <RemoveButton onRemoveTrack={onRemoveTrack} track={track} />
          ) : (
            <AddButton onAddTrack={onAddTrack} track={track} />
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};
