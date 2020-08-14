import { CreateGymInput } from "../types";
import { Request } from "express";
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
  getAllGyms: async (
    parent: any,
    args: { gym: CreateGymInput },
    ctx: { req: Request },
  ) => {
    const gyms = await Gym.find({});
    console.log(ctx.req.headers);
    if (!gyms) throw new Error("No gyms in DB");
    return gyms;
  },

  register: async (
    parent: any,
    args: { gym: CreateGymInput },
    ctx: { req: Request },
  ) => {
    // const { name, password, fighters } = args.gym;
    // const newGym = await Gym.create({ name, password, fighters });
    const newGym = await new Gym(args.gym);

    let token = await newGym.generateToken();
    ctx.req.headers.authorization = `Bearer ${token}`;

    await newGym.save();

    return newGym;
  },

  getGymById: async (
    parent: any,
    args: { id: string },
    context: any,
    info: any,
  ) => {
    const gym = await Gym.findById(args.id);

    if (!gym) throw new Error(`Gym with id ${args.id} not found`);

    return await gym;
  },
};
