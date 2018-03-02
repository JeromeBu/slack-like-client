import React from "react";
import ConnectionForm from "../components/connection/ConnectionForm";
import { subscribeToTimer, userConnection } from "../api/api.js";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";

class Connection extends React.Component {
  handleConnection = userName => {
    if (userName) {
      const user = { name: userName };
      console.log("user sent to api", { user });
      axios
        .post(`${config.API_URL}/log_in`, {
          user
        })
        .then(response => {
          if (!response.data.error) {
            this.props.addConnectedUser(response.data.user).then(() => {
              localStorage.setItem(
                response.data.user.name,
                JSON.stringify(response.data.user)
              );
              this.props.history.push({
                pathname: "/chat_page",
                state: { userName: response.data.user.name }
              });
            });
          } else {
            console.log(
              "TODO : signal error to user, error:",
              response.data.error
            );
          }
        })
        .catch(error => {
          console.log(error.response.data.join("\n"));
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
