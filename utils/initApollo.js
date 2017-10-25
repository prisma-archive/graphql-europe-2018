import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

const SIMPLE_ENDPOINT = 'https://api.graph.cool/simple/v1/cj9729al30bqa0106l36gml8m'
let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {
  const link = createHttpLink({
    uri: SIMPLE_ENDPOINT,
    credentials: 'same-origin'
  })

  const cache = new InMemoryCache({
    dataIdFromObject: o => o.id,
  })

  return new ApolloClient({
    link,
    cache: cache.restore(initialState),
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
