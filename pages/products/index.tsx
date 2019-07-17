import React from "react";
import { Query } from "react-apollo";
import { Table } from "react-bootstrap";
import { NextComponentType, NextPageContext } from "next";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  PRODUCTS_QUERY,
  IProducts,
  ICategories,
  CATEGORIES_QUERY
} from "./graphql";
import authentication from "../../libs/authentication";
import NewProductSectionGQL from "./NewProductSection/graphql";
import withModal from "./../../hocs/withModal";
import UpdateProductGQL from "./UpdateProductSection/graphql";

const Products: NextComponentType = props => {
  // @ts-ignore
  const { Modal } = props;
  return (
    <Query<IProducts> query={PRODUCTS_QUERY} variables={{ own: false }}>
      {({ loading, error, data }) => (
        <Query<ICategories> query={CATEGORIES_QUERY}>
          {({ loading: l2, error: e2, data: d2 }) => {
            if (l2 || loading) return <h2>Loading!</h2>;
            if (error || e2)
              return (
                <h2>
                  Error!{e2} {error}
                </h2>
              );
            if (!data || !d2) return <h2>Error while getting data !</h2>;
            return (
              <div
                style={{
                  marginTop: 10,
                  marginLeft: 200,
                  marginRight: 200
                }}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {data.products.map((product, i) => {
                      const { id, name, price, category } = product;
                      return (
                        <tr key={product.id}>
                          <td>{i + 1}</td>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{price}</td>
                          <td>
                            <Button
                              variant='outline-primary'
                              onClick={() =>
                                // @ts-ignore
                                props.showModal({
                                  id,
                                  name,
                                  price,
                                  category
                                })
                              }>
                              Change info
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <NewProductSectionGQL categories={d2.categories} />
                <Modal dataFetched={d2.categories} />
              </div>
            );
          }}
        </Query>
      )}
    </Query>
  );
};

Products.getInitialProps = (context: NextPageContext) => {
  // check if the user is authenticated before page load.
  authentication(context);

  return {};
};

export default withModal({
  Component: Products,
  Form: UpdateProductGQL,
  header: "Update Product"
});
