import * as React from "react";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";

import Input from "../../../components/Input";
import { NewPasswordSchema } from "./validation";

interface INewPasswordProps {
  onChangePassword: (values: any) => Promise<any>;
}

const NewPasswordSection: React.SFC<INewPasswordProps> = ({
  onChangePassword
}) => {
  const handleSubmit = async (values: any) => {
    await onChangePassword({
      variables: {
        password: values.password
      }
    });
  };
  return (
    <Formik
      initialValues={{ password: "", rePassword: "" }}
      onSubmit={handleSubmit}
      validationSchema={NewPasswordSchema}>
      {({ errors, touched }) => (
        <Form style={{ marginTop: 30 }}>
          <Input
            name='password'
            label='New password'
            errors={errors}
            touched={touched}
          />
          <Input
            name='rePassword'
            label='Repeat the new password'
            errors={errors}
            touched={touched}
          />
          <Button type='submit'>Change</Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewPasswordSection;
