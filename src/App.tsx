
import React, { FC } from "react";

import './App.css';

import Container from "./components/Container";
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});


const App: FC = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Container />
      </ApolloProvider>
    </div>
  )
}
export default App;
