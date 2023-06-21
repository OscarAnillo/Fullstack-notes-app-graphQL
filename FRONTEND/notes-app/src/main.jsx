import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

// 2
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3005/"
  })
})

// 3
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
