import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server-express";
import connectDb from "./db/connectDb";
import resolvers from "./resolvers";
import express from "express";

(async () => {
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
      gyms: [Gym]
      getGymById(id: ID): Gym
    }

    type Mutation {
      addFighter(fighter: FighterInput): [Fighter]
      registerGym(gym: RegisterInput): Gym
    }
  `;

  await connectDb();

  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
    introspection: true,
    playground: true,
    context: ({ req }) => {
      return {
        headers: req.headers,
        req,
      };
    },
  });

  server.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    );
  });
})();
