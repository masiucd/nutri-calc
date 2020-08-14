import { scalers } from "../scalers";
import { resolvers as fighterResolver } from "./fighterResolvers";
import { gymResolver } from "./gymResolvers";

const resolvers = {
  Query: {
    fighters: fighterResolver.fighters,
    fighter: fighterResolver.fighter,
    gyms: gymResolver.getAllGyms,
    getGymById: gymResolver.getGymById,
  },

  Mutation: {
    addFighter: fighterResolver.addFighter,
    registerGym: gymResolver.register,
  },

  Date: scalers.date,
};

export default resolvers;
