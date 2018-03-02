import React from "react";
import "./Message.css";
import format from "date-fns/format";

class Message extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  render() {
    return (
      <div className="message">
        <div className="message-text">
          <h6>
            {this.props.user.name}{" "}
            <span className="time-sent">
              {format(this.props.createdAt, "HH:mm")}
            </span>
          </h6>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Message;
