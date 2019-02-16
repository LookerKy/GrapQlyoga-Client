import React, { Component } from "react";
import GlobalStyles from "Components/GlobalStyles";
import { ApolloProvider } from "react-apollo";
import client from "../apolloClient";
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyles />
      </ApolloProvider>
    );
  }
}

export default App;
