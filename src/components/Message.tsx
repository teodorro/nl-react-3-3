import ITextMessage from "../messages/ITextMessage";

type Props = { message: ITextMessage };

export default function Message(props: Props) {
  const message = props.message;
  return (
    <>
      <div className="message-data align-left">
        <span className="dot message-dot"></span>
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {message.from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </>
  );
}
