import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IForm, IFormClass } from "./interface";
import { ReactHookFormContainer } from "./style";
import { useRef } from "react";
import { TextField } from "@mui/material";

export default function ReactHookForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const nameDefaultValues = {
    firstname: "",
    lastname: "",
  };
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: nameDefaultValues,
  });

  const classDefaultValue = {
    class: "",
    grade: "",
  };
  const { register: classReg, handleSubmit: classHandleSubmit } = useForm<IFormClass>({
    defaultValues: classDefaultValue,
  });

  const getForm = () => {
    console.log("getValues", getValues());
  };

  const submitName: SubmitHandler<IForm> = (data) => {
    reset();
    console.log(data);
  };

  const getRef = () => {
    console.log(inputRef.current?.value);
  };

  const submitClass: SubmitHandler<IFormClass> = (data) => {
    console.log(data);
  };

  return (
    <ReactHookFormContainer>
      <div className="introduce-rhf">
        <Controller
          control={control}
          name="firstname"
          render={({ field }) => <TextField {...field} />}
        />
        {/* <input type="text" {...register("firstname")} /> */}
        <input type="text" {...register("lastname", { required: true })} />
        {errors.lastname && (
          <small className="error">This field is required</small>
        )}
        <button onClick={handleSubmit(submitName)} type="submit">
          Submit
        </button>
        <button onClick={getForm}>Get all value</button>
      </div>

      <div className="uncontrolled-component">
        <input type="text" ref={inputRef} />
        <button onClick={getRef}>Get ref</button>
      </div>

      <div className="class-form">
        <input type="text" {...classReg("class")} />
        <input type="text" {...classReg("grade")} />
        <button onClick={classHandleSubmit(submitClass)}>Class button</button>
      </div>
    </ReactHookFormContainer>
  );
}
