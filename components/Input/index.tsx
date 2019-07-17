import * as React from "react";
import { Field, FieldProps } from "formik";
import * as Bootstrap from "react-bootstrap";

import { ILoginFormValues, INewProductValues } from "./types";

const { Fragment } = React;

export interface IInputProps {
  name: string;
  label: string;
  errors: any;
  touched: any;
  isPassword?: boolean;
}

const Input: React.SFC<IInputProps> = ({
  name,
  label,
  errors,
  touched,
  isPassword = false
}) => {
  return (
    <div className='form-group'>
      <Field
        name={name}
        render={({
          field
        }: FieldProps<ILoginFormValues | INewProductValues>) => (
          <Fragment>
            <label htmlFor={name}>{label}</label>
            <Bootstrap.FormControl
              type={isPassword ? "password" : "text"}
              {...field}
              isInvalid={!!errors[name] && touched[name]}
              isValid={!!!errors[name] && touched[name]}
            />
          </Fragment>
        )}
      />
      {errors[name] && touched[name] ? (
        <Bootstrap.Form.Control.Feedback type='invalid'>
          {errors[name]}
        </Bootstrap.Form.Control.Feedback>
      ) : null}
    </div>
  );
};

export default Input;
