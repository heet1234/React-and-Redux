import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div style={{ fontSize: "24px", paddingLeft: "10px" }}>Select a song</div>
    );
  }
  return (
    <div style={{ paddingLeft: "10px" }}>
      <p style={{ fontSize: "24px" }}>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
