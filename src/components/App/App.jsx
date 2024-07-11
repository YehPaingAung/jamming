import { useCallback, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchBarResults } from "../SearchBarResults/SearchBarResults";
import { Playlist } from "../PlayList/PlayList";
import styles from "./App.module.css";
import Spotify from "../../utils/Spotify";

// const initialStateTrackList = [
//   {
//     id: 333,
//     name: "Good For You",
//     artist: "OP",
//     album: "Good Morning",
//   },
//   {
//     id: 12,
//     name: "Sad Sunset",
//     artist: "UI",
//     album: "Back",
//   },
//   {
//     id: 3241,
//     name: "Quas",
//     artist: "Karl",
//     album: "Invoke",
//   },
//   {
//     id: 1111,
//     name: "Was",
//     artist: "Karl",
//     album: "Invoke",
//   },
//   {
//     id: 678,
//     name: "Exort",
//     artist: "Karl",
//     album: "Invoke",
//   },
//   {
//     id: 4445,
//     name: "Cold Snap",
//     artist: "Karl",
//     album: "Invoke",
//   },
//   {
//     id: 900,
//     name: "Laguna",
//     artist: "Lina",
//     album: "Fire",
//   },
//   {
//     id: 87,
//     name: "Hide",
//     artist: "Slark",
//     album: "Fish",
//   },
//   {
//     id: 99,
//     name: "Pause",
//     artist: "Void",
//     album: "Timeless",
//   },
//   {
//     id: 76,
//     name: "Run like a wind",
//     artist: "Wind Ranger",
//     album: "Runner",
//   },
//   {
//     id: 88,
//     name: "Thunder",
//     artist: "Storm Spirit",
//     album: "Storm",
//   },
// ];
function App() {
  const [trackList, setTrackList] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [playListName, setPlayListName] = useState("");

  const search = useCallback((term) => {
    Spotify.search(term).then(setTrackList);
  }, []);

  const handleAddTrack = useCallback(
    (track) => {
      if (!playList.find((t) => t.id === track.id)) {
        setPlayList([...playList, track]);
      }
    },
    [playList]
  );

  const handleRemoveTrack = useCallback(
    (track_id) => {
      setPlayList(playList.filter((list) => list.id !== track_id));
    },
    [playList]
  );

  const handleUpdatePlayListName = useCallback((name) => {
    setPlayListName(name);
  }, []);

  const savePlayList = useCallback(() => {
    const trackUris = playList.map((track) => track.uri);
    Spotify.savePlaylist(playListName, trackUris).then(() => {
      setPlayListName("New Playlist");
      setPlayList([]);
    });
  }, [playListName, playList]);
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>
        Jammming <i class="fa-brands fa-spotify"></i>
      </h1>
      <SearchBar onSearch={search} />
      <div className={styles.showcase}>
        <div className={styles.leftBox}>
          {trackList.length === 0 ? (
            <h2>TYPE YOUR DESIRE SONG NAME IN THE SEARCH BOX</h2>
          ) : (
            <SearchBarResults
              trackList={trackList}
              onAddTrack={handleAddTrack}
            />
          )}
        </div>
        <div className={styles.rightBox}>
          {playList.length === 0 ? (
            <h2>START ADDING SONGS TO YOUR PLAYLIST</h2>
          ) : (
            <Playlist
              trackList={playList}
              onRemoveTrack={handleRemoveTrack}
              onNameChange={handleUpdatePlayListName}
              onSavePlayList={savePlayList}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
