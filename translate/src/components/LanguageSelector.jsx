import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        <h3>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.context.onLanguageChange("english")}
          />
          <i
            className="flag in"
            onClick={() => this.context.onLanguageChange("hindi")}
          />
        </h3>
      </div>
    );
  }
}

export default LanguageSelector;
