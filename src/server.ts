import { ApolloServer, gql } from "apollo-server";

const fightersData = [
  {
    id: "sdadss21321sa",
    name: "Yodsanaklai",
    gym: "Fairtex",
    skills: ["Left kick", "Left side", "strong"],
    age: 36,
    status: "AGGRESSIVE",
  },
  {
    id: "212ssa@@33",
    name: "Petchmarakot",
    gym: "Petchyindee",
    skills: ["Smart", "Knees"],
    age: 25,
    status: "SMART",
  },
];

type Fighter = typeof fightersData;

const typeDefs = gql`
  enum Status {
    VERY_AGGRESSIVE
    AGGRESSIVE
    SEMI_AGGRESSIVE
    LIGHT_AGGRESSIVE
    SMART
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
    fighter(id: ID): Fighter
  }
`;

const resolvers = {
  Query: {
    fighters: () => fightersData,
    fighter: (obj: any, args: { id: string }, context: any, info: any) => {
      const { id } = args;
      const foundFighter = fightersData.find((fighter) => fighter.id === id);
      if (!foundFighter) {
        throw new Error("Id not found ");
      }
      return foundFighter;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
