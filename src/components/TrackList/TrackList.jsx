import React from "react";
import { Track } from "../Track/Track";

export const TrackList = ({
  trackList,
  isRemovable,
  onAddTrack,
  onRemoveTrack,
}) => {
  return (
    <div>
      {trackList.map((track, index) => (
        <Track
          key={index}
          track={track}
          isRemovable={isRemovable}
          onAddTrack={onAddTrack}
          onRemoveTrack={onRemoveTrack}
        />
      ))}
    </div>
  );
};
