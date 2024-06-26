import React from "react";
import { Track } from "../Track/Track";

export const TrackList = ({ track, onAddTrack }) => {
  return <Track track={track} onAddTrack={onAddTrack} />;
};
