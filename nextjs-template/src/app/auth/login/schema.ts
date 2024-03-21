import * as yup from "yup";

export const schema = yup.object().shape({
  firstname: yup.string().required("Vui lòng nhập họ").email("email type"),
  lastname: yup.string().required("Vui lòng nhập tên"),
});
