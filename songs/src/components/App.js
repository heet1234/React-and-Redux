import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: "20px" }}>
      <div className="ui container segment" style={{ fontSize: "32px" }}>
        Songs List:
      </div>
      <div className="ui row" style={{ padding: "15px" }}>
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <div className="ui container segment">
            <h2>Song Detail:</h2>
          </div>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
