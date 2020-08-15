import { CreateGymInput, Ctx, GymInput } from "../types";
import { Request } from "express";
import Gym from "../models/Gym";

export const gymResolver = {
  getAllGyms: async (parent: any, args: { gym: CreateGymInput }, ctx: Ctx) => {
    const gyms = await Gym.find({});

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

  getGymById: async (parent: any, args: { id: string }, context: Ctx) => {
    const gym = await Gym.findById(args.id);

    if (!gym) throw new Error(`Gym with id ${args.id} not found`);

    return await gym;
  },

  updateGym: async (parent: any, args: GymInput, context: Ctx) => {
    const gym = await Gym.findByIdAndUpdate(
      args.id,
      { name: args.name },
      {
        runValidators: true,
      },
    );

    await gym?.save();

    return gym;
  },

  deleteGym: async (parent: any, args: GymInput, context: Ctx) => {
    await Gym.findByIdAndRemove(args.id);
    return true;
  },
};
