import { IResolvers } from "graphql-tools";

const resolvers: IResolvers = {
  Query: {
    helloWorld: () => "Hello my friend!",
  },
};

export default resolvers;
