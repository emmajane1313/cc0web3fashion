import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "/api/graphql/web3",
});

export const graphClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
