import React from "react";
import getUserFromToken from "./getUserIdFromToken";
import { parseCookies } from "../Apollo/withApolloClient";

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
