import React from "react";

class ConnectionForm extends React.Component {
  state = {
    input: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.user !== this.props.user || nextState.input !== this.state.input
    );
  }

  handleChange = event => {
    const value = event.target.value;
    console.log("in handle change. Input : ", value);
    this.setState({
      input: value
    });
  };

  render() {
    console.log("props in connection forme :", this.props);

    return (
      <div>
        <p>User connected : {this.props.user.name}</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button onClick={() => this.props.handleConnection(this.state.input)}>
          Connect user
        </button>
      </div>
    );
  }
}

export default ConnectionForm;
