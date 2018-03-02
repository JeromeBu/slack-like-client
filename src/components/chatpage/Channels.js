import React from "react";
import Channel from "./Channel";

class Channels extends React.Component {
  render() {
    return (
      <ul className="channels">
        <p className="subtitle">Channels :</p>
        <Channel />
      </ul>
    );
  }
}

export default Channels;
