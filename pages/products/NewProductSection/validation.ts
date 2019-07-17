import * as Yup from "yup";

export const NewProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(30)
    .required("Name is required"),
  price: Yup.string().required("Price is required")
});
