import ITextMessage from "../messages/ITextMessage";

type Props = { message: ITextMessage };

export default function Response(props: Props) {
  const message = props.message;
  return (
    <>
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{message.from.name}</span>
        <i className="fa fa-circle me"></i>
        <span className="dot response-dot"></span>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </>
  );
}
