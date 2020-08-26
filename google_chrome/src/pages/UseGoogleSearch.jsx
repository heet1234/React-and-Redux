import React from "react";
import "./UseGoogleSearch.css";
import API_KEY, { CONTEXT_KEY } from "./keys";
// import Response from "../response";

class UseGoogleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      t: this.props.term || "tesla",
    };
  }
  componentDidMount() {
    this.setState({ t: this.props.term });
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${this.props.term}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    if (this.state.t !== this.props.term) {
      this.componentDidMount();
    }
    return (
      <div className="searchPage_results">
        <p className="searchPage_resultCount">
          About {this.state.data?.searchInformation.formattedTotalResults}{" "}
          results ({this.state.data?.searchInformation.formattedSearchTime}{" "}
          seconds) for {this.props.term}
        </p>
        {this.state.data?.items.map((item) => (
          <div className="searchPage_result">
            <a href={item.link} className="searchPage_resultLink">
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                  <img
                    className="searchPage_resultImage"
                    src={item.pagemap?.cse_image[0]?.src}
                    alt="image"
                  />
                )}
              {item.displayLink}
            </a>
            <a href={item.link} className="searchPage_resultTitle">
              <h3>{item.title}</h3>
            </a>
            <p className="searchPage_resultSnippet">{item.snippet}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UseGoogleSearch;
