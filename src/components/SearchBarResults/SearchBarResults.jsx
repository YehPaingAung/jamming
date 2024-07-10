import React from "react";
import { TrackList } from "../TrackList/TrackList";

export const SearchBarResults = ({ trackList, isRemovable, onAddTrack }) => {
  return (
    <div>
      <TrackList
        trackList={trackList}
        isRemovable={false}
        onAddTrack={onAddTrack}
      />
    </div>
  );
};
