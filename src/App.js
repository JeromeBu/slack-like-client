import React, { Component } from "react";
import "./App.css";
import { subscribeToTimer, connection } from "./api/api.js";
import ConnectionForm from "./components/ConnectionForm";

class App extends Component {
  state = {
    timestamp: "no timestamp yet",
    user: { name: "no one is connected" }
  };

  componentDidMount() {
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }

  handleClick = userName => {
    this.setState({
      user: { name: userName }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Slack like in react</h1>
        </header>
        <p>Time: {this.state.timestamp}</p>
        <ConnectionForm user={this.state.user} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
