import React from "react";

class Channel extends React.Component {
  render() {
    return <li className="channel-name">{this.props.name}</li>;
  }
}

export default Channel;
