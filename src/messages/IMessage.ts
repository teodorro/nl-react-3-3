import ISender from "./ISender";

export default interface IMessage {
  id: string;
  from: ISender;
  type: string;
  time: string;
}