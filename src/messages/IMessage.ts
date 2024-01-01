import ISender from "./ISender";

export default interface IMessage {
  id: number;
  from: ISender;
  type: string;
  time: string;
}