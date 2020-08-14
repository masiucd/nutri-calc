export enum Status {
  VERY_AGGRESSIVE = "VERY_AGGRESSIVE",
  AGGRESSIVE = "AGGRESSIVE",
  SEMI_AGGRESSIVE = "SEMI_AGGRESSIVE",
  LIGHT_AGGRESSIVE = "LIGHT_AGGRESSIVE",
  SMART = "SMART",
}

export interface Fighter {
  id: string;
  name: string;
  gym?: string;
  skills?: string[];
  age?: number;
  status?: Status;
  createdAt?: Date;
}

export interface CreateGymInput {
  name: string;
  password: string;
  fighters: string[];
  date: Date;
}
