import React from "react";
import "./Search.css";
import { Search } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import history from "../history";
import SearchContext from "../contexts/SearchContext";

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  static contextType = SearchContext;
  search = (e) => {
    e.preventDefault();
    this.context.onTermChange(this.state.input);
    history.push("/search");
  };
  render() {
    return (
      <form className="search">
        <div className="search_input">
          <Search className="search_inputIcon" />
          <input
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0xMiAxNWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA1YzAtMS42Ni0xLjM0LTMtMy0zUzkgMy4zNCA5IDV2N2MwIDEuNjYgMS4zNCAzIDMgM3oiLz48cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNMTEgMTguOTJoMlYyMmgtMnoiLz48cGF0aCBmaWxsPSIjRjRCNDAwIiBkPSJNNyAxMkg1YzAgMS45My43OCAzLjY4IDIuMDUgNC45NWwxLjQxLTEuNDFDNy41NiAxNC42MyA3IDEzLjM4IDcgMTJ6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTEyIDE3Yy0xLjM4IDAtMi42My0uNTYtMy41NC0xLjQ3bC0xLjQxIDEuNDFBNi45OSA2Ljk5IDAgMCAwIDEyLjAxIDE5YzMuODcgMCA2Ljk4LTMuMTQgNi45OC03aC0yYzAgMi43Ni0yLjIzIDUtNC45OSA1eiIvPjwvc3ZnPg=="
            alt="Mic"
          />
        </div>
        {this.props.showButtons || false ? (
          <div className="search_buttons">
            <Button type="submit" onClick={this.search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search_buttons">
            <Button
              className="search_hiddenButtons"
              type="submit"
              onClick={this.search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button className="search_hiddenButtons" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    );
  }
}

export default InputSearch;
