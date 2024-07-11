import React from "react";
import { TrackList } from "../TrackList/TrackList";

export const SearchBarResults = ({ trackList, onAddTrack }) => {
  return (
    <TrackList
      trackList={trackList}
      isRemovable={false}
      onAddTrack={onAddTrack}
    />
  );
};
