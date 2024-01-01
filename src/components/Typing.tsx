// type Props = { message: string}
interface Props {
  message: string;
}

export default function Message({ message }: Props) {
  console.log(message);
  return <></>;
}
