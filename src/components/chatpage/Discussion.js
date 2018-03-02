import React from "react";
import Message from "./Message";
import UserInput from "./UserInput";

class Discussion extends React.Component {
  render() {
    console.log("Messages in disc :", this.props.messages);
    const messages = this.props.messages.map((message, index) => {
      return <Message key={index} {...message} />;
    });
    return (
      <div className="discussion-container">
        <div className="channel-header">
          <div className="channel-header-text">Channel</div>
        </div>
        <div className="channel-header-spacer" />
        <div
          className="discussion flex-container flex-direction-column"
          key="discussion-container"
        >
          {messages}
        </div>
        <div className="input-spacer" />
        <UserInput
          handleNewMessage={this.props.handleNewMessage}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default Discussion;
