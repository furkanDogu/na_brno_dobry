import * as React from "react";
import App, { Container, AppContext } from "next/app";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { AppProps } from "next/app";
import * as _ from "lodash";

import withApolloClient from "../libs/Apollo/withApolloClient";
import UserContextProvider from "../libs/authentication/UserContext";
import { TUserData } from "../libs/authentication/UserContext";
import withUserData from "../libs/authentication/withUserData";
import Header from "../components/Header";

interface IMyAppProps extends AppProps {
  apolloClient: ApolloClient<any>;
  user: TUserData;
}

class MyApp extends App<IMyAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[Error]", error);
    // This is needed to render errors correctly in development / production
    // @ts-ignore
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, apolloClient, user, router } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <UserContextProvider value={user}>
            <Header router={router} client={apolloClient} />
            <Component {...pageProps} />
          </UserContextProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default _.flowRight(
  withApolloClient,
  withUserData
)(MyApp);
