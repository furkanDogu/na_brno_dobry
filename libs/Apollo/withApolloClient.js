import React from "react";
import initApollo from "./initApollo";
import Head from "next/head";
import { getDataFromTree } from "react-apollo";
import cookie from 'cookie';

export const parseCookies = (req, options = {}) => {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie, options);
};

export default (App) => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";

    static async getInitialProps(ctx) {
      const { Component, router, ctx: ccc } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data

      const apollo = initApollo({}, { getToken: () => parseCookies(ccc.req).auth_token });
      ctx.ctx.apolloClient = apollo;
      if (typeof window === "undefined") {
        try {
          await getDataFromTree(<App {...appProps} Component={Component} router={router} apolloClient={apollo} />);
        } catch (error) {
          console.error("Error while running `getDataFromTree`", error);
        }
        Head.rewind();
      }

      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }
    // runs only on client
    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState, { getToken: () => parseCookies().auth_token });

    }

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};
