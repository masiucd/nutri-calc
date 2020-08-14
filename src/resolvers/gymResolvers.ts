import { CreateGymInput } from "../types";
import Gym from "../models/Gym";
// import {
//   Resolver,
//   Mutation,
//   Arg,
//   Int,
//   Query,
//   InputType,
//   Field,
// } from "type-graphql";

// @Resolver()
// export class GymResolver {}

export const gymResolver = {
  register: async (parent: any, args: { gym: CreateGymInput }, ctx: any) => {
    const newGym = await Gym.create(args.gym);

    await newGym.save();

    return newGym;
  },
};
