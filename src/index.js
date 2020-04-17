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

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});