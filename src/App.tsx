import React from "react";
import { createApolloClient } from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import "./styles.css";

export default function App() {
  const token = "1234";
  const apolloClient = createApolloClient(token);

  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <h1>Hello Newest Project!</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </ApolloProvider>
  );
}
