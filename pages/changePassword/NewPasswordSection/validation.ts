import * as Yup from "yup";

export const NewPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(5)
    .max(20)
    .required("New password is required"),
  rePassword: Yup.string()
    .min(5)
    .max(20)
    .required("Passwords aren't matched")
    .oneOf([Yup.ref("password"), null!], "Passwords aren't matched")
});
