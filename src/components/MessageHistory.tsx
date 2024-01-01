import "../css/main.css";
import IMessage from "../messages/IMessage";
import ITextMessage from "../messages/ITextMessage";
// import IMessage from "../messages/IMessage";
import Message from "./Message";
import Response from "./Response";

interface Props {
  messages: IMessage[];
}

export default function MessageHistory(props: Props) {
  const messages = props.messages;
  console.log(messages);
  console.log(messages[0] as ITextMessage);
  return (
    <>
      <ul>
        {messages.map((message) =>
          message.type === "message" ? (
            <li
              className="clearfix"
              key={message.id}
            >
              <Message message={message} />
            </li>
          ) : (
            <li
              className="clearfix"
              key={message.id}
            >
              <Response message={message} />
            </li>
          )
        )}
      </ul>
    </>
  );

  // function getClassMessage(message : IMessage) {
  //   if (message.type === 'message') {
  //     return new
  //   }
  // }  key={message.id}

  // return (
  //   <>
  //     <ul>
  //       <li className="clearfix">
  //         <div className="message-data align-right">
  //           <span className="message-data-time">10:10</span> &nbsp; &nbsp;
  //           <span className="message-data-name">Ольга</span>
  //           <i className="fa fa-circle me"></i>
  //         </div>
  //         <div className="message other-message float-right">
  //           Привет, Виктор. Как дела? Как идёт работа над проектом?
  //         </div>
  //       </li>
  //       <li>
  //         <div className="message-data">
  //           <span className="message-data-name">
  //             <i className="fa fa-circle online"></i> Виктор
  //           </span>
  //           <span className="message-data-time">10:12</span>
  //         </div>
  //         <div className="message my-message">
  //           Привет. Давай сегодня созвонимся. Проект практически готов, и у меня
  //           есть что показать.
  //         </div>
  //       </li>
  //     </ul>
  //   </>
  // );
}
