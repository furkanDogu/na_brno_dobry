import * as React from "react";
import { Formik, Form } from "formik";
import * as Bootstrap from "react-bootstrap";

import Input from "../../../components/Input";
import Select from "../../../components/Select";

interface IUpdateProductFormProps {
  params?: {
    id: string;
    name: string;
    price: number;
    category: { id: string; name: string };
  };
  onUpdate: (values: any) => Promise<any>;
  dataFetched: { id: string; name: string }[];
  closeModal: () => void;
}

const UpdateProductForm: React.SFC<IUpdateProductFormProps> = props => {
  const { id, name, price, category } = props.params!;

  const handleSubmit = async (values: any) => {
    await props.onUpdate({
      variables: {
        name: values.name,
        productId: id,
        price: parseFloat(values.price),
        categoryId: values.categoryId
      }
    });
    props.closeModal();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ id, name, price, categoryId: category.id }}>
      {({ errors, touched }) => (
        <Form>
          <Bootstrap.Form.Group>
            <Input name='name' label='Name' errors={errors} touched={touched} />
            <Input
              name='price'
              label='Price'
              errors={errors}
              touched={touched}
            />
          </Bootstrap.Form.Group>
          <Select
            options={props.dataFetched}
            label='Category'
            name='categoryId'
          />
          <div style={{ marginTop: 20 }} />
          <Bootstrap.Button variant='primary' type='submit'>
            Update
          </Bootstrap.Button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateProductForm;
