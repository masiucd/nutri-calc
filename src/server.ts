import { ApolloServer, gql } from "apollo-server";

const dogsData = [
  {
    name: "Harry Potter",
    owner: "J.K. Rowling",
  },
  {
    name: "Jurassic Park",
    owner: "Michael Crichton",
  },
];

const typeDefs = gql`
  type Dog {
    name: String
    owner: String
  }

  type Query {
    dogs: [Dog]
  }
`;

const resolvers = {
  Query: {
    dogs: () => dogsData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
