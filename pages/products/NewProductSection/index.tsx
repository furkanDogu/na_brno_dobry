import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Bootstrap from "react-bootstrap";

import Select from "../../../components/Select";
import Input from "../../../components/Input";
import { NewProductSchema } from "./validation";
import { UserContext } from "./../../../libs/authentication/UserContext";

interface INewProductSection {
  options: { id: string; name: string }[];
  onAddProduct(values: any): any;
}

const NewProductSection: React.SFC<INewProductSection> = ({
  options,
  onAddProduct
}) => {
  const user = useContext(UserContext);
  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        categoryId: options[0].id
      }}
      validationSchema={NewProductSchema}
      onSubmit={async (values, { resetForm }) => {
        // TODO: Check if user is admin then can add products for others.
        const copiedValues = {
          ...values,
          price: parseFloat(values.price),
          ownerId: user!.id
        };

        await onAddProduct({
          variables: copiedValues
        });
        resetForm();
      }}>
      {({ errors, touched }) => (
        <Form className='center'>
          <Bootstrap.Form.Group
            style={{ margin: 100, marginLeft: 150, marginRight: 150 }}>
            <Input
              name='name'
              label={`Product's name`}
              touched={touched}
              errors={errors}
            />
            <Input
              name='price'
              label={`Product's price`}
              touched={touched}
              errors={errors}
            />
            <Select options={options} name='categoryId' label='Category' />
            <div style={{ position: "relative", marginTop: 30 }}>
              <Bootstrap.Button type='submit' className='center'>
                Add Product
              </Bootstrap.Button>
            </div>
          </Bootstrap.Form.Group>
        </Form>
      )}
    </Formik>
  );
};

export default NewProductSection;
