"use client";
import React from "react";
import { LoginContainer } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

export default function Login() {
  const {
    register,
    control,
    handleSubmit,
    trigger,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <LoginContainer>
      <div className="login-card">
        <h3>Login</h3>

        <div className="login-form"></div>
      </div>
    </LoginContainer>
  );
}
