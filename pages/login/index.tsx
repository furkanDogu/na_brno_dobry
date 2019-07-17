import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Bootstrap from "react-bootstrap";
import DatePicker from "react-datepicker";
import Router from "next/router";
import { ApolloClient } from "apollo-client";
import "bootstrap/dist/css/bootstrap.min.css";

import Input from "../../components/Input";
import { formatDate } from "../../utils/Formatters";
import { setCurrentUser } from "./../../services/authService";
import { LoginSchema, RegisterSchema } from "./validation";

export interface ILoginFormProps {
  login: (values: any) => Promise<any>;
  isLogin: boolean;
  onSetLogin: (value: boolean) => any;
  apolloClient: ApolloClient<any>;
}

const LoginForm: React.SFC<ILoginFormProps> = ({
  login,
  isLogin,
  onSetLogin,
  apolloClient
}) => {
  const [state, setState] = useState({
    birthday: new Date()
  });

  const handleSubmit = async (values: any) => {
    try {
      const variables = isLogin
        ? values
        : {
            ...values,
            birthday: formatDate(state.birthday, "yyyy-mm-dd")
          };
      const res = await login({ variables });
      if (!res.data.login && !res.data.registerUser) {
        alert("Login Failed!");
      } else {
        const action = isLogin ? "login" : "registerUser";
        setCurrentUser(res.data[action].token);
        apolloClient.cache.reset().then(() => {
          Router.replace("/");
        });
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        surname: "",
        role: "user"
      }}
      validationSchema={isLogin ? LoginSchema : RegisterSchema}
      onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form>
          <Bootstrap.Form.Group
            style={{ margin: 200, marginLeft: 600, marginRight: 600 }}>
            <Input
              name='email'
              label='Email address'
              touched={touched}
              errors={errors}
            />
            <Input
              name='password'
              isPassword={true}
              label='Password'
              touched={touched}
              errors={errors}
            />
            {!isLogin ? (
              <>
                <Input
                  name='name'
                  label='Name'
                  touched={touched}
                  errors={errors}
                />
                <Input
                  name='surname'
                  label='Surname'
                  touched={touched}
                  errors={errors}
                />
                <label htmlFor='birthday'>Birthday</label>
                <div className='form-group'>
                  <DatePicker
                    dateFormat='yyyy/MM/dd'
                    name='birthday'
                    className='form-control'
                    selected={state.birthday}
                    onChange={date => setState({ ...state, birthday: date! })}
                  />
                </div>
              </>
            ) : null}
            <div style={{ position: "relative", marginTop: 30 }}>
              <Bootstrap.Button type='submit' className='center'>
                {isLogin ? "Login" : "Register"}
              </Bootstrap.Button>
            </div>
            <div style={{ marginTop: 50 }}>
              {isLogin ? (
                <small
                  className='form-text text-muted clickable'
                  style={{ textAlign: "center" }}
                  onClick={() => onSetLogin(false)}>
                  Don't you have an account ?
                </small>
              ) : (
                <small
                  style={{ textAlign: "center" }}
                  className='form-text text-muted clickable'
                  onClick={() => onSetLogin(true)}>
                  İf you have an account, click to login
                </small>
              )}
            </div>
          </Bootstrap.Form.Group>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
