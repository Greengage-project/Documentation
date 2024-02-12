import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { API } from "./api.js";
import { resolvers } from './resolvers.js'; 
import { schema } from './schema.js'; 
import { pageContentDirective } from './directives.js';
import { addResolversToSchema, makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema';
import { buildSubgraphSchema } from "@apollo/subgraph";

import { config } from 'dotenv';
import typeDefs from './schema-federated.js';

const env = config()?.parsed; 
const port = env.PORT ?? '3333';

interface ContextValue {
    dataSources: {
      API: API;
    };
}

const subsgraphSchema = buildSubgraphSchema(typeDefs,);

// Create the base executable schema

let schemaForServer = mergeSchemas({schemas:[makeExecutableSchema({
  typeDefs: schema,
  resolvers,
}), subsgraphSchema]});

const server = new ApolloServer<ContextValue>({
    typeDefs: schemaForServer,
    resolvers,    
});
  
const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    const { cache } = server;
    return {
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
      dataSources: {
        API: new API({ cache }),
      }
    };
  },
  listen: { port : parseInt(port) }
});

console.log(`🚀  Server ready at ${url}`);