import * as React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

import App from "./components";

import graphqlClient from "./api/graphql";

render(
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
