import mongoose, { Schema, Document } from "mongoose";
import { IGym } from "./Gym";
import { Status } from "../types";

export interface IFighter extends Document {
  name: string;
  gym: IGym["_id"];
  skills: string[];
  age: number;
  status: Status;
  createdAt: Date;
}

const fighterSchema = new Schema<IFighter>(
  {
    name: {
      type: String,
      required: ["name is required", true],
    },
    gym: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gym",
    },
    skills: [{ type: String }],
    age: Number,
    status: {
      type: String,
      required: ["Status is required", true],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Fighter = mongoose.model("Fighter", fighterSchema);

export default Fighter;

// enum: [
//   "VERY_AGGRESSIVE",
//   "AGGRESSIVE",
//   "SEMI_AGGRESSIVE",
//   "LIGHT_AGGRESSIVE",
//   "SMART",
// ],
