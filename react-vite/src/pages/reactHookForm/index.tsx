import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "./interface";
import { ReactHookFormContainer } from "./style";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

export default function ReactHookForm() {
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
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: nameDefaultValues,
  });

  const getForm = () => {
    console.log("getValues", getValues());
  };

  const submitName: SubmitHandler<IForm> = (data) => {
    reset();
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
        {errors.firstname && (
          <span className="error">{errors.firstname.message?.toString()}</span>
        )}
        <input type="text" {...register("lastname")} />
        {errors.lastname && (
          <span className="error">{errors.lastname.message?.toString()}</span>
        )}
        <button onClick={handleSubmit(submitName)} type="submit">
          Submit
        </button>
        <button onClick={getForm}>Get all value</button>
      </div>
    </ReactHookFormContainer>
  );
}
