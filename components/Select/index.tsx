import * as React from "react";
import { Field, FieldProps } from "formik";
import { Form } from "react-bootstrap";

export interface ISelectProps {
  options: { id: string; name: string }[];
  label: string;
  name: string;
}

const Select: React.SFC<ISelectProps> = ({ options, label, name }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        render={({ field }: FieldProps) => (
          <Form.Control {...field} as='select'>
            {options.map((opt, index) => (
              <option value={opt.id} key={index}>
                {opt.name}
              </option>
            ))}
          </Form.Control>
        )}
      />
    </>
  );
};

export default Select;
