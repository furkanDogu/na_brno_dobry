import React from "react";
import { Modal } from "react-bootstrap";
import { NextPageContext } from "next";

interface IFormParams {
  params: any;
  dataFetched: any;
  closeModal: () => void;
}
interface IwithModalProps {
  Component: any;
  header: string;
  Form: React.FunctionComponent<IFormParams>;
}

// TODO: add getInitialProps and convert Component to nextPageComponent

const withModal = ({ Component, header, Form }: IwithModalProps) =>
  class WithModal extends React.Component<any> {
    state = {
      show: false,
      formParams: {}
    };

    static async getInitialProps(context: NextPageContext) {
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(context);
      }

      return {
        ...pageProps
      };
    }

    setShow(show: boolean) {
      this.setState({ show });
    }
    setFormParams(formParams: any) {
      this.setState({ formParams });
    }
    openModelWithParam = (params: any) => {
      this.setFormParams(params);
      this.setShow(true);
    };
    renderModal = (dataFetched: any) => (
      <Modal show={this.state.show} onHide={() => this.setShow(false)}>
        <Modal.Header>
          <h4>{header}</h4>
        </Modal.Header>
        <Modal.Body>
          <Form
            params={this.state.formParams}
            dataFetched={dataFetched.dataFetched}
            closeModal={() => this.setShow(false)}
          />
        </Modal.Body>
      </Modal>
    );
    render() {
      return (
        <>
          <Component
            {...this.props}
            showModal={this.openModelWithParam}
            Modal={this.renderModal}
          />
        </>
      );
    }
  };

export default withModal;
