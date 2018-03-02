import React from "react";
import ConnectionForm from "../components/connection/ConnectionForm";
import { subscribeToTimer, userConnection } from "../api/api.js";
import { Link } from "react-router-dom";
import axios from "axios";

class Connection extends React.Component {
  handleConnection = userName => {
    if (userName) {
      const user = { name: userName };
      axios
        .post("http://localhost:3001/log_in", {
          user
        })
        .then(response => {
          if (!response.data.error) {
            this.props.addConnectedUser(response.data.user).then(() => {
              this.props.history.push("/chat_page");
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
    }
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Slack like in react</h1>
          <h2>Connection page: </h2>
        </header>
        <ConnectionForm
          user={this.props.user}
          handleConnection={this.handleConnection}
        />
      </div>
    );
  }
}

export default Connection;
