import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Connection from "./containers/Connection";
import ChatPage from "./containers/ChatPage";

class App extends Component {
  state = {
    user: {}
  };

  addConnectedUser = user => {
    return new Promise((resolve, reject) => {
      this.setState(
        {
          user
        },
        () => resolve()
      );
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={props => (
              <Connection
                {...props}
                user={this.state.user}
                handleConnection={this.handleConnection}
                addConnectedUser={this.addConnectedUser}
              />
            )}
          />
          <Route
            exact
            path="/chat_page"
            render={props => (
              <ChatPage
                {...props}
                user={this.state.user}
                addConnectedUser={this.addConnectedUser}
              />
            )}
          />
          <Route
            exact
            path="/chat_page/:channel"
            render={props => (
              <ChatPage
                {...props}
                user={this.state.user}
                addConnectedUser={this.addConnectedUser}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
