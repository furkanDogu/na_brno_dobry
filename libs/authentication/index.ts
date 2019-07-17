import nextCookie from "next-cookies";
import getUserFromToken from "./getUserIdFromToken";
import { NextPageContext } from "next";
import Router from "next/router";

const authentication = (context: NextPageContext) => {
  // reads the token in cookie (checks if res in context exists) according to the res, runs for client or server side.
  const { auth_token } = nextCookie(context);

  // we check if the cookie is valid here. If token cannot be decoded, then it's invalid.
  const user = getUserFromToken(auth_token);
  // if called on server
  if (context.res && !user) {
    context.res.writeHead(302, { Location: "/login/graphql" });
    context.res.end();
    return;
  }

  // if called on client
  if (!user) Router.push("/login/graphql", "/login");
};

export default authentication;
