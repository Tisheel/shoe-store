import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import connetToMongoDb from './db/config.js'

import { typeDefs } from './schema.js'
import { resolvers } from './resolvers.js'

await connetToMongoDb()

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})

console.log(`Server ready at: ${url}`)