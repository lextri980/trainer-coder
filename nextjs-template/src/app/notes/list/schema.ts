import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Required field"),
  content: yup.string().required("Required field"),
  status: yup.string().required("Required field"),
});
