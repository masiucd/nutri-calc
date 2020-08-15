import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/typedefs";
import connectDb from "./db/connectDb";
import resolvers from "./resolvers";
import express from "express";

(async () => {
  await connectDb();

  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
    introspection: true,
    playground: true,
    context: ({ req, res }) => {
      return {
        req,
        res,
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
