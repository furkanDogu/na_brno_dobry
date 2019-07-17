import gql from "graphql-tag";

export type category = {
  id: string;
  name: string;
};

export interface IProducts {
  products: { id: string; name: string; price: number; category: category }[];
}

export interface ICategories {
  categories: category[];
}

export const PRODUCTS_QUERY = gql`
  query ProductsQuery(
    $own: Boolean!
    $orderBy: ProductOrderCrits
    $skip: Int
    $take: Int
    $filter: String
  ) {
    products(
      own: $own
      orderBy: $orderBy
      skip: $skip
      take: $take
      filter: $filter
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

export const CATEGORIES_QUERY = gql`
  query {
    categories {
      id
      name
    }
  }
`;
