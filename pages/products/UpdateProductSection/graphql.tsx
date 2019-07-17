import React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";

import UpdateProductSection from ".";

const UPDATE_PRODUCT_MUTATION = gql`
  mutation updateProduct(
    $name: String!
    $price: Float!
    $productId: String!
    $categoryId: String!
  ) {
    updateProduct(
      name: $name
      price: $price
      productId: $productId
      categoryId: $categoryId
    ) {
      id
      name
      price
      category {
        id
        name
      }
    }
  }
`;
const UpdateProductGQL: React.SFC = ({
  params,
  dataFetched,
  closeModal
}: any) => {
  return (
    <>
      <Mutation<MutationFn> mutation={UPDATE_PRODUCT_MUTATION}>
        {updateProduct => (
          <UpdateProductSection
            closeModal={closeModal}
            dataFetched={dataFetched}
            params={params}
            onUpdate={values => updateProduct(values)}
          />
        )}
      </Mutation>
    </>
  );
};

export default UpdateProductGQL;
