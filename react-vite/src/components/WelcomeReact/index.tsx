import { ReactNode } from "react";
import "./style.scss";

interface IProps {
  initNumber?: string | number;
  props1?: string;
  props2?: number;
  checkEmit: (a: string) => void;
  children?: ReactNode;
}

interface IObj {
  a: string;
  b?: number;
  c?: boolean;
}

export default function WelcomeReact(props: IProps) {
  const { checkEmit, children } = props;

  const emit: string = "Emitted";

  const pureObj: IObj = {
    a: "1",
    b: 2,
    c: true,
  };

  const strArray: string[] = ["a", "b", "c"];

  const pureArray: IObj[] = [
    {
      a: "1",
      b: 2,
      c: true,
    },
    {
      a: "3",
    },
  ];

  console.log(pureObj);
  console.log(strArray);
  console.log(pureArray);

  return (
    <div className="welcome-container">
      <div>{children}</div>
      <button onClick={() => checkEmit(emit)}>Click</button>
    </div>
  );
}
