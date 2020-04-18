const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const WageAPI = require('./datasources/wage');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    playground: true,
    introspection:true,
    context: async ({ req }) => {
        let headers = {headers: req.headers}
        if(req.headers.authorization){
            let token = req.headers.authorization;
            const user = (token != 'null' || null) ? await getUser(token) : null;
            return user ? { headers,token, user } : { headers,token };
        }else{
            return {headers};
        }
    },
    dataSources: () => ({
        wageAPI: new WageAPI()
    })
});

const port = process.env.PORT;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});