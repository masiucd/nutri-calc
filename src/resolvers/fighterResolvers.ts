import { fightersData } from "../db/fakeData";
// import {
//   Resolver,
//   Mutation,
//   Arg,
//   Int,
//   Query,
//   InputType,
//   Field,
// } from "type-graphql";

import { Fighter as FighterType } from "../types";

const resolvers = {
  fighters: () => {
    return fightersData;
  },
  fighter: (parent: any, args: { id: string }, context: any, info: any) => {
    const { id } = args;
    console.log(context);
    const foundFighter = fightersData.find((fighter) => fighter.id === id);
    if (!foundFighter) {
      throw new Error("Id not found ");
    }
    return foundFighter;
  },
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
};

export { resolvers };
