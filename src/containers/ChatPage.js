import React from "react";
import Discussion from "../components/chatpage/Discussion";
import { createNewMessage, listenToNewMessages } from "../api/api.js";
import axios from "axios";
import Channels from "../components/chatpage/Channels";
import "./ChatPage.css";

class ChatPage extends React.Component {
  state = {
    messages: []
  };

  handleNewMessage = message => {
    createNewMessage(message);
    console.log("Message in handleNewMessage : ", message);
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/messages")
      .then(response => {
        console.log("Fetching messages from API");
        if (!response.data.error) {
          this.setState({ messages: response.data.messages });
        } else {
          console.log(
            "TODO : signal error to user, error:",
            response.data.error
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
    console.log("listening to messages...");
    listenToNewMessages((err, data) => {
      this.setState({ messages: [...this.state.messages, data] });
    });
  }

  render() {
    console.log("user connected: ", this.props.user);
    return (
      <div className="flex-container slack">
        <div className="side-bar">
          <div className="position-fixed">
            <h1>Le reacteur :</h1>
            <p>{this.props.user.name}</p>
            <br />
            <Channels />
          </div>
        </div>
        <Discussion
          messages={this.state.messages}
          handleNewMessage={this.handleNewMessage}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default ChatPage;
