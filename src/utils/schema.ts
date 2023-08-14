import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("please be sure to enter a correct email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Invalid Email Format"
    ),
  password: Yup.string().required("Password is required"),
  // remember: Yup.boolean()
  //   .oneOf([true], "You must agree to the terms and conditions")
  //   .required("You must agree to the terms and conditions"),
});
