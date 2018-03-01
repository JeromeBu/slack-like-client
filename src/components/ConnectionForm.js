import React from "react";

class ConnectionForm extends React.Component {
  state = {
    input: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.user !== this.props.user ||
      nextState.input !== this.state.input
    ) {
      return true;
    }
    return false;
  }

  handleChange = event => {
    console.log("in handle change");
    const value = event.target.value;
    this.setState({
      input: value
    });
  };

  render() {
    console.log("Rendered Connection Form");
    return (
      <div>
        <p>User connected : {this.props.user.name}</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button onClick={() => this.props.handleClick(this.state.input)}>
          Connect user
        </button>
      </div>
    );
  }
}

export default ConnectionForm;
