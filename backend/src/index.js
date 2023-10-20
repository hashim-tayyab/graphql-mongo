const {ApolloServer} = require('apollo-server')
const connectToDatabase = require('./config/db');


const typeDefs = require('./typeDefs/typeDefs');
const resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({
  typeDefs, 
  resolvers
});

connectToDatabase();


server.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000`);
});