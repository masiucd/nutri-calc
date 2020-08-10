import { ApolloServer, gql } from "apollo-server";

const ultrasData = [
  {
    name: "Zyleta",
    team: "Legi warszawa",
    rating: 5,
    status: "VERY_AGGRESSIVE",
    leader: { name: "Staruch", age: 34, timeOfLeader: "12 years" },
  },
  {
    name: "Anglarna",
    team: "IFK GBG",
    rating: 3,
  },
  {
    name: "Juve",
    team: "Drugi",
    rating: 4,
  },
];

const typeDefs = gql`
  enum Status {
    VERY_AGGRESSIVE
    AGGRESSIVE
    SEMI_AGGRESSIVE
    LIGHT_AGGRESSIVE
  }

  type Leader {
    name: String
    age: Int
    timeOfLeader: String
  }

  type Member {
    name: String
    age: Int
    cool: Boolean
  }

  type Ultra {
    id: ID
    name: String
    team: String
    rating: Int
    status: Status
    leader: Leader
    members: [Member]
  }

  type Query {
    ultras: [Ultra]
  }
`;

const resolvers = {
  Query: {
    ultras: () => ultrasData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
