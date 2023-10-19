const { gql } = require('apollo-server');

module.exports = gql`
type Query {
  getAllUsers: [User!]!
}

  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
`


