import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Mail is required"),
  password: Yup.string()
    .min(5)
    .max(20)
    .required("Password is required")
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Mail is required"),
  password: Yup.string()
    .min(5)
    .max(20)
    .required("Password is required"),
  name: Yup.string()
    .min(2)
    .max(25)
    .required("Name is required"),
  surname: Yup.string()
    .min(2)
    .max(25)
    .required("Surname is required")
});
