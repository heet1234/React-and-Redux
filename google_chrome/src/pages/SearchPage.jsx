import React from "react";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import RoomIcon from "@material-ui/icons/Room";
import UseGoogleSearch from "./UseGoogleSearch";
import ImageIcon from "@material-ui/icons/Image";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SearchContext from "../contexts/SearchContext";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import DescriptionIcon from "@material-ui/icons/Description";

class SearchPage extends React.Component {
  static contextType = SearchContext;
  render() {
    const term = this.context.term;
    return (
      <div className="searchPage">
        <div className="searchPage_header">
          <Link to="/">
            <img
              className="searchPage_logo"
              src="https://pngimg.com/uploads/google/google_PNG19631.png"
              alt="Google Logo"
            />
          </Link>
          <div className="searchPage_headerBody">
            <Search />
            <div className="searchPage_options">
              <div className="searchPage_optionsLeft">
                <div className="searchPage_option">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPage_option">
                  <DescriptionIcon />
                  <Link to="/news">News</Link>
                </div>
                <div className="searchPage_option">
                  <ImageIcon />
                  <Link to="/images">Images</Link>
                </div>
                <div className="searchPage_option">
                  <LocalOfferIcon />
                  <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchPage_option">
                  <RoomIcon />
                  <Link to="/maps">Maps</Link>
                </div>
                <div className="searchPage_option">
                  <MoreIcon />
                  <Link to="/more">More</Link>
                </div>
              </div>
              <div className="searchPage_optionsRight">
                <div className="searchPage_option">
                  <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPage_option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {term && <UseGoogleSearch term={term} />}
      </div>
    );
  }
}

export default SearchPage;
