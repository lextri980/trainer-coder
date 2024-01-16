import { ReactNode, createContext } from "react";

interface IProps {
  children: ReactNode;
}

const setAuthContextData = {
  key: 'value',
  key2: "value2"
};
export const SetAuthContext = createContext(setAuthContextData);

export default function SetAuthContextProvider(props: IProps) {
  //Handle anything
  return (
    <SetAuthContext.Provider value={setAuthContextData}>
      {props.children}
    </SetAuthContext.Provider>
  );
}
