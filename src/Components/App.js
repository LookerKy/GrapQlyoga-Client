import React, { Component } from "react";
import GlobalStyles from "Components/GlobalStyles";
import Home from "Components/Home";
import Detail from "Components/Detail";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "../apolloClient";
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/detail/:movieId" component={Detail} />
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
