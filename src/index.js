const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const WageAPI = require('./datasources/wage');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    playground: true,
    dataSources: () => ({
        wageAPI: new WageAPI()
    })
});

const port = process.env.PORT;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});