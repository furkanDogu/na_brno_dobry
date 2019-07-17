import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { Router } from "next/router";

import { removeCurrentUser } from "../../services/authService";
import { ApolloClient } from "apollo-client";

interface IHeaderProps {
  router: Router;
  client: ApolloClient<any>;
}

const Refs = ["/products", "/changePassword"];

const Header: React.SFC<IHeaderProps> = ({ router, client }) => {
  const { route: currentPath } = router;

  const setActiveLink = (ref: string) => {
    return ref === currentPath ? "nav-link active" : "nav-link";
  };

  const logOut = async (client: ApolloClient<any>) => {
    removeCurrentUser();
    await client.cache.reset();
    router.push("/login/graphql", "/login");
  };

  return (
    <Navbar bg='dark' variant='dark'>
      <Link href='/products'>
        <a className='navbar-brand'>Na Brno Dobry</a>
      </Link>
      {currentPath !== "/login/graphql" && (
        <Nav>
          <Link href={Refs[0]} as='/products'>
            <a className={setActiveLink(Refs[0])}>Products</a>
          </Link>
          <Link href={Refs[1]} as='/changePassword'>
            <a className={setActiveLink(Refs[1])}>Change password</a>
          </Link>
          <span className='nav-link' onClick={() => logOut(client)}>
            Log out
          </span>
        </Nav>
      )}
    </Navbar>
  );
};

export default Header;
