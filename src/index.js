const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const WageAPI = require('./datasources/wage');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        wageAPI: new WageAPI()
    })
});

const PORT = $process.env.PORT;
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});