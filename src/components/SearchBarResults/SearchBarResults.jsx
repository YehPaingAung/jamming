import React, { useState } from "react";
import styles from "./SearchBarResults.module.css";

import { TrackList } from "../TrackLists/TrackList";
import { PlayList } from "../PlayList/PlayList";
import { NewTrackList } from "../NewTrackList/NewTrackList";

const initialState = [
  {
    id: 333,
    name: "Good For You",
    author: "OP",
    album: "Good Morning",
  },
  {
    id: 12,
    name: "Sad Sunset",
    author: "UI",
    album: "Back",
  },
  {
    id: 3241,
    name: "Quas",
    author: "Karl",
    album: "Invoke",
  },
  {
    id: 1111,
    name: "Was",
    author: "Karl",
    album: "Invoke",
  },
  {
    id: 678,
    name: "Exort",
    author: "Karl",
    album: "Invoke",
  },
  {
    id: 4445,
    name: "Cold Snap",
    author: "Karl",
    album: "Invoke",
  },
  {
    id: 900,
    name: "Laguna",
    author: "Lina",
    album: "Fire",
  },
  {
    id: 87,
    name: "Hide",
    author: "Slark",
    album: "Fish",
  },
  {
    id: 99,
    name: "Pause",
    author: "Void",
    album: "Timeless",
  },
  {
    id: 76,
    name: "Run like a wind",
    author: "Wind Ranger",
    album: "Runner",
  },
  {
    id: 88,
    name: "Thunder",
    author: "Storm Spirit",
    album: "Storm",
  },
];

const playListInitialState = {
  workout: [
    {
      id: 76,
      name: "Run like a wind",
      author: "Wind Ranger",
      album: "Runner",
    },
    {
      id: 88,
      name: "Thunder",
      author: "Storm Spirit",
      album: "Storm",
    },
  ],
  relax: [
    {
      id: 3241,
      name: "Quas",
      author: "Karl",
      album: "Invoke",
    },
    {
      id: 1111,
      name: "Was",
      author: "Karl",
      album: "Invoke",
    },
    {
      id: 678,
      name: "Exort",
      author: "Karl",
      album: "Invoke",
    },
    {
      id: 4445,
      name: "Cold Snap",
      author: "Karl",
      album: "Invoke",
    },
    {
      id: 900,
      name: "Laguna",
      author: "Lina",
      album: "Fire",
    },
    {
      id: 87,
      name: "Hide",
      author: "Slark",
      album: "Fish",
    },
  ],
};

export const SearchBarResults = () => {
  const [trackList, setTrackList] = useState(initialState);
  const [newTrackList, setNewTrackList] = useState([
    {
      id: 909090,
      name: "Always prepare for war",
      author: "Axe",
      album: "Berserker",
    },
    {
      id: 78912378,
      name: "I like what i see",
      author: "Morphling",
      album: "Wave",
    },
  ]);
  const [playListName, setPlayListName] = useState("");
  const [playList, setPlayList] = useState(playListInitialState);

  const handleAddTrack = (selectedTrack) => {
    setNewTrackList([...newTrackList, selectedTrack]);
  };

  const handleRemoveTrack = (selectedTrackId) => {
    setNewTrackList(newTrackList.filter((prev) => prev.id !== selectedTrackId));
  };

  const handleAddPlayListName = (playListName) => {
    setPlayListName(playListName);
  };

  const handlePlayList = () => {
    let newPlayList = { playListName: newTrackList };
    console.log(newPlayList);
    setPlayList({ ...playList, newPlayList });
    console.log(playList);
    setNewTrackList([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.track}>
        <h2>Results</h2>
        {trackList.map((track) => (
          <TrackList key={track.id} track={track} onAddTrack={handleAddTrack} />
        ))}
      </div>
      <div className={styles.list}>
        <NewTrackList
          trackList={newTrackList}
          onRemoveTrack={handleRemoveTrack}
          onAddPlayListName={handleAddPlayListName}
          playListName={playListName}
          setPlayListName={setPlayListName}
          onPlayList={handlePlayList}
        />
        <PlayList
          playList={playList}
          trackList={newTrackList}
          playListName={playListName}
        />
      </div>
    </div>
  );
};
