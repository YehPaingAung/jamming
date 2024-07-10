import { useCallback, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchBarResults } from "../SearchBarResults/SearchBarResults";
import { Playlist } from "../PlayList/PlayList";
import styles from "./App.module.css";
import { PlayListContainer } from "../PlayListContainer/PlayListContainer";
import Spotify from "../../utils/Spotify";

const initialStateTrackList = [
  {
    id: 333,
    name: "Good For You",
    artist: "OP",
    album: "Good Morning",
  },
  {
    id: 12,
    name: "Sad Sunset",
    artist: "UI",
    album: "Back",
  },
  {
    id: 3241,
    name: "Quas",
    artist: "Karl",
    album: "Invoke",
  },
  {
    id: 1111,
    name: "Was",
    artist: "Karl",
    album: "Invoke",
  },
  {
    id: 678,
    name: "Exort",
    artist: "Karl",
    album: "Invoke",
  },
  {
    id: 4445,
    name: "Cold Snap",
    artist: "Karl",
    album: "Invoke",
  },
  {
    id: 900,
    name: "Laguna",
    artist: "Lina",
    album: "Fire",
  },
  {
    id: 87,
    name: "Hide",
    artist: "Slark",
    album: "Fish",
  },
  {
    id: 99,
    name: "Pause",
    artist: "Void",
    album: "Timeless",
  },
  {
    id: 76,
    name: "Run like a wind",
    artist: "Wind Ranger",
    album: "Runner",
  },
  {
    id: 88,
    name: "Thunder",
    artist: "Storm Spirit",
    album: "Storm",
  },
];
function App() {
  const [trackList, setTrackList] = useState([]);
  const [playList, setPlayList] = useState([
    {
      id: 76,
      name: "Run like a wind",
      artist: "Wind Ranger",
      album: "Runner",
    },
    {
      id: 88,
      name: "Thunder",
      artist: "Storm Spirit",
      album: "Storm",
    },
  ]);
  const [playListName, setPlayListName] = useState("");
  const [playListContainer, setPlayListContainer] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setTrackList);
  }, []);

  const handleAddTrack = (track) => {
    if (!playList.find((t) => t.id === track.id)) {
      setPlayList([...playList, track]);
    }
  };

  const handleRemoveTrack = (track_id) => {
    setPlayList(playList.filter((list) => list.id !== track_id));
  };

  const handleAddPlayList = (playList) => {
    setPlayListContainer([...playListContainer, playList]);
    setPlayList([]);
  };
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <div className={styles.listContainer}>
        <SearchBarResults
          className={styles.searchBarResults}
          trackList={trackList}
          onAddTrack={handleAddTrack}
        />
        <Playlist
          className={styles.playList}
          trackList={playList}
          onRemoveTrack={handleRemoveTrack}
          playListName={playListName}
          setPlayListName={setPlayListName}
          onAddPlayList={handleAddPlayList}
          playList={playList}
        />
        {/* <PlayListContainer
          playListContainer={playListContainer}
          setPlayListName={setPlayListName}
        /> */}
      </div>
    </div>
  );
}

export default App;
