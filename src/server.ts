import { ApolloServer, gql } from "apollo-server";
import { GraphQLScalarType, Kind } from "graphql";
import connectDb from "./db/connectDb";
import { Fighter as FighterType } from "./types";

const fightersData = [
  {
    id: "sdadss21321sa",
    name: "Yodsanaklai",
    gym: "Fairtex",
    skills: ["Left kick", "Left side", "strong"],
    age: 36,
    status: "AGGRESSIVE",
    createdAt: new Date("04-12-2020"),
  },
  {
    id: "212ssa@@33",
    name: "Petchmarakot",
    gym: "Petchyindee",
    skills: ["Smart", "Knees"],
    age: 25,
    status: "SMART",
    createdAt: new Date("10-12-2002"),
  },
];

// type Fighter = typeof fightersData;

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

  type Fighter {
    id: ID
    name: String!
    gym: String!
    skills: [String]!
    age: Int
    status: Status
    createdAt: Date
  }

  type Query {
    fighters: [Fighter]
    fighter(id: ID): Fighter
  }

  type Mutation {
    addFighter(fighter: FighterInput): [Fighter]
  }
`;

const resolvers = {
  Query: {
    fighters: () => fightersData,
    fighter: (parent: any, args: { id: string }, context: any, info: any) => {
      console.log("parent ", parent, "context ", context, "info ", info);
      const { id } = args;
      const foundFighter = fightersData.find((fighter) => fighter.id === id);
      if (!foundFighter) {
        throw new Error("Id not found ");
      }
      return foundFighter;
    },
  },

  Mutation: {
    addFighter: (
      parent: any,
      args: { fighter: FighterType },
      context: any,
      info: any,
    ) => {
      const { id, name, createdAt } = args.fighter;
      const newList = [
        ...fightersData,
        {
          id,
          name,
          createdAt,
        },
      ];
      return newList;
    },
  },

  Date: new GraphQLScalarType({
    name: "Date",
    description: "Custom date type",
    parseValue(value) {
      // value from the client
    },
    serialize(value) {
      // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};

// (async () => {
//   await connectDb();
// })();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  introspection: true,
  playground: true,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
  },
  // context: async () => ({ db: await connectDb() }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
