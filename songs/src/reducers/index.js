import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Udd Gaye", duration: "4:21" },
    { title: "Sage", duration: "4:05" },
    { title: "Liggi", duration: "3:12" },
    { title: "Thandi Hawa", duration: "3:50" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
