import React from "react";
import Discussion from "../components/chatpage/Discussion";
import {
  createNewMessage,
  listenToNewMessages,
  createNewChannel,
  listenToNewChannels,
  joinChannel
} from "../api/api.js";
import axios from "axios";
import Channels from "../components/chatpage/Channels";
import "./ChatPage.css";
import config from "../config";
import findIndex from "lodash/findIndex";

class ChatPage extends React.Component {
  state = {
    messages: [],
    channels: [],
    activeChannel: {}
  };

  changeActiveChannel = channel => {
    this.setState(
      {
        activeChannel: channel
      },
      function() {
        console.log(
          "Channel in changeActiveChannel : ",
          this.state.activeChannel
        );
        const channelName = this.state.activeChannel.name;
        this.fetchMessages(channelName);
        joinChannel(channelName);
      }
    );
  };

  handleNewMessage = message => {
    createNewMessage(message);
  };

  handleNewChannel = channel => {
    createNewChannel(channel);
  };

  fetchMessages = channelName => {
    axios
      .get(`${config.API_URL}/messages?channel=${channelName}`)
      .then(response => {
        console.log("Fetching messages from API");
        console.log("Messages :", response.data);

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
  };

  componentDidMount() {
    this.props.addConnectedUser(JSON.parse(sessionStorage.getItem("userName")));
    const channelName = this.props.match.params.channel;

    this.fetchMessages(channelName);

    axios
      .get(`${config.API_URL}/channels`)
      .then(response => {
        console.log("Fetching channels from API");
        if (!response.data.error) {
          const channels = response.data.channels;
          const index = findIndex(channels, { name: channelName });

          this.setState({
            channels: channels,
            activeChannel: index >= 0 ? channels[index] : channels[0]
          });
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

    listenToNewChannels((err, data) => {
      this.setState({ channels: [...this.state.channels, data] });
    });

    joinChannel(this.state.activeChannel.name);
  }

  render() {
    console.log("chat page DID MOUNT, state : ", this.state);
    return (
      <div className="flex-container slack">
        <div className="side-bar">
          <div className="position-fixed">
            <h1>Le reacteur :</h1>
            <p>{this.props.user ? this.props.user.name : "Loading user"}</p>
            <br />
            <Channels
              channels={this.state.channels}
              handleNewChannel={this.handleNewChannel}
              changeActiveChannel={this.changeActiveChannel}
              activeChannel={this.state.activeChannel}
            />
          </div>
        </div>
        <Discussion
          messages={this.state.messages}
          handleNewMessage={this.handleNewMessage}
          channel={this.state.activeChannel}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default ChatPage;
