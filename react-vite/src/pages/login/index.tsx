import { useState } from "react";
import { LoginContainer } from "./style";

export default function Login() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })

  const onChangeInput = (e: any) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    })
  }

  const submit = () => {
  
  }

  return (
    <LoginContainer>
      <p>First name</p>
      <input name="firstName" value={name.firstName} type="text" onChange={onChangeInput} />
      <p>Last name</p>
      <input name="lastName" value={name.lastName} type="text" onChange={onChangeInput} />
      <button onClick={submit}>Submit</button>
    </LoginContainer>
  )
}
