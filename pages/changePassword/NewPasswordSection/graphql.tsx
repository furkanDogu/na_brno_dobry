import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import gql from "graphql-tag";

import NewPasswordSection from ".";

const CHANGE_PASSWORD_MUTATION = gql`
  mutation ChangePassword($password: String!) {
    changePassword(password: $password)
  }
`;

const NewPasswordSectionGQL: React.SFC = () => {
  return (
    <Mutation<MutationFn> mutation={CHANGE_PASSWORD_MUTATION}>
      {changePassword => (
        <NewPasswordSection
          onChangePassword={(values: any) => changePassword(values)}
        />
      )}
    </Mutation>
  );
};

export default NewPasswordSectionGQL;
