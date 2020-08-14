import mongoose, { Schema, Document, HookNextFunction } from "mongoose";
import { Fighter } from "../types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface IGym extends Document {
  name: string;
  password: string;
  fighters: Array<Fighter["id"]>;
  createdAt: Date;
  generateToken: () => Promise<string>;
}

const gymSchema = new Schema<IGym>(
  {
    name: {
      type: String,
      required: ["name is required", true],
      unique: true,
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

gymSchema.pre<IGym>("save", async function (next: HookNextFunction) {
  const gym = this;

  let salt = await bcrypt.genSalt(8);
  if (gym.isModified("password")) {
    gym.password = await bcrypt.hash(gym.password, salt);
  }

  next();
});

gymSchema.methods.generateToken = async function (): Promise<string> {
  const gym = this;

  const token = await jwt.sign({ id: gym._id }, "secret", { expiresIn: "24h" });

  await gym.save();

  return token;
};

const Gym = mongoose.model<IGym>("Gym", gymSchema);

export default Gym;
