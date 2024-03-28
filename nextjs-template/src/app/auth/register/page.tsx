"use client";
import { useAppDispatch } from "@/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { LoginContainer } from "../login/style";
import { IRegister } from "./interface";
import { schema } from "./schema";
import { AuthAction } from "@/store/authStore/AuthReducer";

export default function Register() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const defaultValues: IRegister = {
    username: "",
    name: "",
    password: "",
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(schema), defaultValues });

  const goLogin = () => {
    router.push("/auth/login");
  };

  const onRegister = async (data: IRegister) => {
    dispatch(AuthAction.registerRequest(data));
  };

  return (
    <LoginContainer>
      <div className="login-card">
        <h2>Register</h2>
        <div className="login-form">
          <div className="input-field">
            <div className="group-input">
              <Controller
                control={control}
                name="username"
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.username ? true : false}
                    className="fw"
                    label="Username"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <small className="error">
                {errors && errors.username?.message}
              </small>
            </div>
            <div className="group-input">
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.name ? true : false}
                    className="fw"
                    label="Name"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <small className="error">{errors && errors.name?.message}</small>
            </div>
            <div className="group-input">
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.password ? true : false}
                    className="fw"
                    label="Password"
                    variant="outlined"
                    size="small"
                    type="password"
                  />
                )}
              />
              <small className="error">
                {errors && errors.password?.message}
              </small>
            </div>
          </div>
          <div className="footer">
            <p>
              You had an account?{" "}
              <span className="link" onClick={goLogin}>
                Login
              </span>
            </p>
            <Button variant="contained" onClick={handleSubmit(onRegister)}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
}
