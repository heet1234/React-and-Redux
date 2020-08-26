import React from "react";

const Context = React.createContext();

export class SearchStore extends React.Component {
  state = { term: "" };

  onTermChange = (term) => {
    this.setState({ term });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onTermChange: this.onTermChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
