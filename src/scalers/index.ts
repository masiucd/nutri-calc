import { GraphQLScalarType, Kind } from "graphql";

export const scalers = {
  date: new GraphQLScalarType({
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
