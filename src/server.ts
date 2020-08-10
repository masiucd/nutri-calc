import { ApolloServer, gql } from "apollo-server";

const fightersData = [
  {
    name: "Yodsanaklai",
    gym: "Fairtex",
    skills: ["Left kick", "Left side", "strong"],
    age: 36,
    status: "AGGRESSIVE",
  },
];

type Fighter = typeof fightersData;

const typeDefs = gql`
  enum Status {
    VERY_AGGRESSIVE
    AGGRESSIVE
    SEMI_AGGRESSIVE
    LIGHT_AGGRESSIVE
  }

  # input FighterInput {

  # }

  type Fighter {
    id: ID
    name: String!
    gym: String!
    skills: [String]!
    age: Int
    status: Status
  }

  type Query {
    fighters: [Fighter]
  }
`;

const resolvers = {
  Query: {
    fighters: () => fightersData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
