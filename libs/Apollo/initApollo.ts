import { ApolloClient, InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";

let apolloClient: any = null;

// Polyfill fetch() on the server (used by apollo-client)
if (typeof window === "undefined") {
  //@ts-ignore
  global.fetch = fetch;
}

const create = (initialState: any, options: any) => {
  const isBrowser = typeof window !== "undefined";

  const httpLink = createHttpLink({
    uri: "http://localhost:4000",
    credentials: "same-origin"
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = options.getToken();
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        auth_token: token
      }
    };
  });
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  });
};

export default function initApollo(initialState: any, options: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
