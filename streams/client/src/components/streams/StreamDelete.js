import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <React.Fragment>
        <div onClick={this.onSubmit} className="ui green button">
          A P P R O V E
        </div>
        <Link to="/" className="ui red button">
          C A N C E L
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete "${this.props.stream.title}"?`;
  }

  render() {
    return (
      <Modal
        title="D E L E T E &nbsp; S T R E A M"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapSateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapSateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
