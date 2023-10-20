import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      age
    }
  }
`;

export const CREATE_USER = gql`
  mutation($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;

export const GET_USER = gql`
query getUser($userId: ID!) {
  getUser(id: $userId) {
    id
    name
    age
  }
}
`
