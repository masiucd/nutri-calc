import { gql } from "apollo-server-express";
export const typeDefs = gql`
  scalar Date

  enum Status {
    VERY_AGGRESSIVE
    AGGRESSIVE
    SEMI_AGGRESSIVE
    LIGHT_AGGRESSIVE
    SMART
  }

  input FighterInput {
    id: ID
    name: String
    gym: String
    skills: [String]
    age: Int
    createdAt: Date
  }

  input RegisterInput {
    id: ID
    name: String!
    password: String!
    fighters: [String]
    createdAt: Date
  }

  input UpdateGymInput {
    id: ID!
    name: String!
  }

  type Fighter {
    id: ID
    name: String!
    gym: String!
    skills: [String]!
    age: Int
    status: Status
    createdAt: Date
  }

  type Gym {
    id: ID
    name: String!
    password: String!
    fighters: [Fighter]
    createdAt: Date
  }

  type Query {
    fighters: [Fighter]
    fighter(id: ID): Fighter
    gyms: [Gym]
    getGymById(id: ID): Gym
  }

  type Mutation {
    addFighter(fighter: FighterInput): [Fighter]
    registerGym(gym: RegisterInput): Gym
    updateGym(id: String!, name: String!): Gym
    deleteGym(id: String!): Boolean
  }
`;
