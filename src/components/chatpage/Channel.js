import React from "react";
import { Link } from "react-router-dom";

class Channel extends React.Component {
  handleClick = () => {
    console.log("Click on :", this.props.channel.name);
    console.log("Channel props :", this.props);
    this.props.changeActiveChannel(this.props.channel);
  };
  render() {
    const { name } = this.props.channel;
    return (
      <li
        className={`channel-name ${this.props.active ? "active" : ""}`}
        onClick={this.handleClick}
      >
        <Link to={`/chat_page/${name}`}>{name}</Link>
      </li>
    );
  }
}

export default Channel;
