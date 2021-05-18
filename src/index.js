import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import './index.scss';
import App from './App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://metaphysics-staging.artsy.net/"
  }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
