import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup.string().required("Required field"),
  password: yup.string().required("Required field"),
  name: yup.string().required("Required field"),
});
