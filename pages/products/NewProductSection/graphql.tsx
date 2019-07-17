import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";

import NewProductSection from ".";
import { PRODUCTS_QUERY } from "../graphql";

const ADD_PRODUCT_MUTATION = gql`
  mutation AddProduct(
    $name: String!
    $price: Float!
    $ownerId: String!
    $categoryId: String!
  ) {
    addProduct(
      name: $name
      price: $price
      ownerId: $ownerId
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

interface INewProductSectionprops {
  categories: { id: string; name: string }[];
}

const NewProductSectionGQL: React.SFC<INewProductSectionprops> = props => {
  return (
    <>
      <Mutation<MutationFn>
        mutation={ADD_PRODUCT_MUTATION}
        // @ts-ignore
        update={(cache, { data: { addProduct } }) => {
          const data = cache.readQuery({
            query: PRODUCTS_QUERY,
            variables: { own: false }
          });
          cache.writeQuery({
            query: PRODUCTS_QUERY,
            variables: { own: false },
            data: {
              // @ts-ignore
              products: [...data.products, addProduct]
            }
          });
        }}>
        {handleAddProduct => (
          <NewProductSection
            options={props.categories}
            onAddProduct={handleAddProduct}
          />
        )}
      </Mutation>
    </>
  );
};

export default NewProductSectionGQL;
