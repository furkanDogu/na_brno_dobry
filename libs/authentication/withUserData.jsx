import React from "react";
import getUserFromToken from "./getUserFromToken";
import { parseCookies } from "../Apollo/withApolloClient";

import authentication from ".";

const withUserData = App => {
  return class AppWithUserData extends React.Component {
    static displayName = "withUserData(App)";

    static async getInitialProps(nextAppContext) {
      let appProps = {};
      const { ctx: nextContext } = nextAppContext;

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(nextAppContext);
      }
      const { auth_token } = parseCookies(nextContext.req);
      const user = getUserFromToken(auth_token);

      if (
        nextContext.pathname !== "/login/graphql" &&
        nextContext.pathname !== "/login"
      )
        authentication(nextContext);

      return {
        ...appProps,
        user
      };
    }

    render() {
      return <App {...this.props} />;
    }
  };
};

export default withUserData;
