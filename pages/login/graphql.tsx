import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn, ApolloConsumer } from "react-apollo";
import { NextPage, NextPageContext } from "next";
import nextCookie from "next-cookies";
import Router from "next/router";

import LoginForm from ".";
import getUserFromToken from "../../libs/authentication/getUserFromToken";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $role: UserRole
    $name: String!
    $surname: String!
    $password: String!
    $email: String!
    $birthday: String!
  ) {
    registerUser(
      role: $role
      name: $name
      surname: $surname
      password: $password
      email: $email
      birthday: $birthday
    ) {
      token
      user {
        id
        role
        email
      }
    }
  }
`;

const LoginFormGQL: NextPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <ApolloConsumer>
        {client => (
          <Mutation mutation={isLogin ? LOGIN_MUTATION : REGISTER_MUTATION}>
            {(login: MutationFn) => (
              <LoginForm
                login={login}
                isLogin={isLogin}
                onSetLogin={setIsLogin}
                apolloClient={client}
              />
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    </>
  );
};

LoginFormGQL.getInitialProps = async (context: NextPageContext) => {
  const { auth_token } = nextCookie(context);
  const user = getUserFromToken(auth_token);

  if (context.res && user) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return {};
  }

  if (user) {
    Router.push("/products", "/");
  }
  return {};
};

export default LoginFormGQL;
