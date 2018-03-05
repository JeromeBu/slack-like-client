import React from "react";
import { listenToWriting, isWritingAMessage } from "../../api/api";

class UserInput extends React.Component {
  state = {
    input: "",
    isWriting: ""
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.sendMessage();
      this.setState({
        input: ""
      });
    }
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState(
      {
        input: value
      },
      function() {
        if (this.state.input) {
          isWritingAMessage(this.props.user);
        } else {
          this.setState({ isWriting: "" });
        }
      }
    );
  };

  sendMessage = () => {
    console.log("props in input", this.props);

    this.props.handleNewMessage({
      text: this.state.input,
      createdAt: new Date(),
      channel: this.props.channel,
      user: this.props.user
    });
  };

  componentDidMount = () => {
    listenToWriting((err, data) => {
      this.setState({ isWriting: data });
    });
  };

  render() {
    return (
      <div className="input-block">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
          onKeyDown={this.handleKeyDown}
        />
        <p>{this.state.isWriting}</p>
      </div>
    );
  }
}

export default UserInput;
