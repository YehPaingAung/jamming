import React from "react";
import { TrackList } from "../TrackList/TrackList";

export const Playlist = ({
  trackList,
  onRemoveTrack,
  setPlayListName,
  playListName,
  onAddPlayList,
  playList,
}) => {
  const handleChange = (e) => {
    setPlayListName(e.target.value);
  };
  const handleClick = () => {
    if (!playListName || !playList.length) return;
    const newPlayList = { name: playListName, tracks: playList };
    onAddPlayList(newPlayList);
    console.log(newPlayList);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        defaultValue={"New Playlist"}
      />
      <TrackList
        trackList={trackList}
        isRemovable={true}
        onRemoveTrack={onRemoveTrack}
      />
      <button onClick={handleClick}>SAVE TO SPOTIFY</button>
    </div>
  );
};
