import "../css/main.css";
import IMessage from "../messages/IMessage";
import ITextMessage from "../messages/ITextMessage";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

interface Props {
  messages: IMessage[];
}

export default function MessageHistory(props: Props) {
  const messages = props.messages;
  return (
    <>
      <ul>
        {messages.map(
          (message) => {
            switch (message.type) {
              case "message":
                return getMessage(message as ITextMessage);
              case "response":
                return getResponse(message as ITextMessage);
              case "typing":
                return getTyping(message);
              default:
                throw new Error("Not implemented message type");
            }
          }
        )}
      </ul>
    </>
  );
}

function getMessage(message: ITextMessage) {
  return (
    <li
      className="clearfix"
      key={message.id}
    >
      <Message message={message} />
    </li>
  );
}

function getResponse(message: ITextMessage) {
  return (
    <li
      className="clearfix"
      key={message.id}
    >
      <Response message={message} />
    </li>
  );
}

function getTyping(message: IMessage) {
  return (
    <li
      className="clearfix"
      key={message.id}
    >
      <Typing message={message} />
    </li>
  );
}
