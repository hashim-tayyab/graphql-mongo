import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {BrowserRouter} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URI,
  cache: new InMemoryCache()
});


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);