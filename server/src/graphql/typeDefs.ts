import { gql } from "apollo-server";

const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    projects: [Project!]!
  }

  type Project {
    id: ID!
    name: String!
  }

  type Query {
    categories: [Category!]!
  }
`;

export default typeDefs;
