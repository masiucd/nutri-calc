import mongoose, { Schema, Document } from "mongoose";
import { Fighter } from "../types";

export interface IGym extends Document {
  name: string;
  password: string;
  fighters: Array<Fighter["id"]>;
  createdAt: Date;
}

const gymSchema = new Schema<IGym>(
  {
    name: {
      type: String,
      required: ["name is required", true],
    },
    password: {
      type: String,
      required: ["password is required", true],
      min: 5,
    },
    fighters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fighter" }],
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

const Gym = mongoose.model("Gym", gymSchema);

export default Gym;
