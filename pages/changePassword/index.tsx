import React, { useContext } from "react";
import { UserContext } from "../../libs/authentication/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import { NextComponentType } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

import NewPasswordSectionGQL from "./NewPasswordSection/graphql";
// import authentication from "../../libs/authentication";

const ChangePassword: NextComponentType = () => {
  const user = useContext(UserContext);
  if (user) {
    return (
      <Container>
        <Row>
          <Col>Name: </Col>
          <Col>{user.email}</Col>
        </Row>
        <Row>
          <Col>ID: </Col>
          <Col>{user.id}</Col>
        </Row>
        <Row>
          <Col>Role: </Col>
          <Col>{user.role}</Col>
        </Row>
        <NewPasswordSectionGQL />
      </Container>
    );
  }
  return <h1>User couldn't be loaded</h1>;
};

export default ChangePassword;
