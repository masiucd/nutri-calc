import { ApolloServer, gql } from "apollo-server";
import connectDb from "./db/connectDb";
import resolvers from "./resolvers";

const typeDefs = gql`
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
  }

  type Mutation {
    addFighter(fighter: FighterInput): [Fighter]
    registerGym(gym: RegisterInput): Gym
  }
`;

(async () => {
  await connectDb();
})();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  introspection: true,
  playground: true,
  context: ({ req }) => {},
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
