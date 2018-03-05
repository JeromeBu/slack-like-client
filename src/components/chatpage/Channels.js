import React from "react";
import Channel from "./Channel";

class Channels extends React.Component {
  state = {
    input: ""
  };
  handleClick = () => {
    if (this.state.input) {
      this.props.handleNewChannel({ name: this.state.input });
      this.setState({
        input: ""
      });
    }
  };
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  render() {
    const channels = this.props.channels.map((channel, index) => {
      return (
        <Channel
          channel={channel}
          key={index}
          changeActiveChannel={this.props.changeActiveChannel}
          active={
            this.props.activeChannel &&
            this.props.activeChannel.name === channel.name
          }
        />
      );
    });
    return (
      <ul className="channels">
        <p className="subtitle">Channels :</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <br />
        <br />
        <button onClick={this.handleClick}>Add a channel</button>
        <br />
        <br />
        {channels}
      </ul>
    );
  }
}

export default Channels;
