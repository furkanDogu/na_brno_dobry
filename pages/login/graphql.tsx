import React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn, ApolloConsumer } from "react-apollo";
import { useState } from "react";

import LoginForm from ".";

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

const LoginFormGQL: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
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
  );
};

export default LoginFormGQL;
