import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui container segment" style={{ marginTop: "20px" }}>
        <h1>Post Lists: </h1>
      </div>
      <div className="ui container segment" style={{ marginTop: "10px" }}>
        <PostList />
      </div>
    </div>
  );
};

export default App;
