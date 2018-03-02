import React from "react";

class UserInput extends React.Component {
  state = {
    input: ""
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  };

  handleChange = event => {
    const value = event.target.value;
    console.log("in handle change. Input : ", value);
    this.setState({
      input: value
    });
  };

  sendMessage = () => {
    this.props.handleNewMessage({
      text: this.state.input,
      createdAt: new Date(),
      user: this.props.user
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
        <button onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}

export default UserInput;
