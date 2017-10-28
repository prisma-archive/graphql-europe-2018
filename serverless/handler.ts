import { transformSchema } from 'graphql-transform-schema'
import { makeRemoteExecutableSchema, mergeSchemas, introspectSchema } from 'graphql-tools'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda'

export default graphqlLambda(async() => {
  const typeDefs = `
  `

  const link = new HttpLink({ uri: process.env.GRAPHQL_ENDPOINT, fetch })
  const graphcoolSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(link),
    link,
  })

  const extendTypeDefs = `
    extend type Query {
      conferences: [Conference!]!
      conference(edition: Edition = Berlin2018): Conference
    }
  `

  const mergedSchemas = mergeSchemas({
    schemas: [graphcoolSchema, extendTypeDefs],
    resolvers: mergeInfo => ({

      Query: {
        conferences(parent, args, context, info) {
          return mergeInfo.delegate('query', 'allConferences', {}, context, info)
        },

        async conference(parent, { edition }, context, info) {
          const conferences = await mergeInfo.delegate('query', 'allConferences', { filter: { edition } }, context, info)

          return conferences[0]
        },
      },

    }),
  })

  // Step 4: Limit exposed operations from merged schemas 
  // Hide every root field except `viewer`
  const schema = transformSchema(mergedSchemas, {
    Query: {
      conferences: true,
      conference: true,
      '*': false,
    },
  })

  return { schema }
})
export const graphiql = graphiqlLambda({ endpointURL: '/' })
