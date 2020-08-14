import { fightersData } from "../db/fakeData";

const fightersQueries = {
  fighters: () => fightersData,
  fighter: (parent: any, args: { id: string }, context: any, info: any) => {
    const { id } = args;
    const foundFighter = fightersData.find((fighter) => fighter.id === id);
    if (!foundFighter) {
      throw new Error("Id not found ");
    }
    return foundFighter;
  },
};

export { fightersQueries };
