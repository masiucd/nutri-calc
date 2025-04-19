import { z } from "zod";
let Gender = z.enum(["female", "male"], {
  errorMap: () => ({ message: "Gender must be female or male" }),
});
export type GenderType = z.infer<typeof Gender>;

let HeightUnit = z.enum(["cm", "in"], {
  errorMap: () => ({ message: "Height unit must be cm or in" }),
});
export type HeightUnit = z.infer<typeof HeightUnit>;

let WeightUnit = z.enum(["kg", "lb"], {
  errorMap: () => ({ message: "Weight unit must be kg or lb" }),
});
export type WeightUnit = z.infer<typeof WeightUnit>;

let ActivityLevel = z.enum(
  [
    "sedentary",
    "lightly_active",
    "moderate",
    "active",
    "very_active",
  ],
  {
    errorMap: () => ({
      message:
        "Activity level must be sedentary, lightly active, moderately active, or very active",
    }),
  },
);

export type ActivityLevel = z.infer<typeof ActivityLevel>;

let ExerciseFrequency = z.enum(
  ["none", "1-2-times-a-week", "3-4-times-a-week", "5-6-times-a-week"],
  {
    errorMap: () => ({
      message:
        "Exercise frequency must be never, 1-2 times a week, 3-4 times a week, or 5-6 times a week",
    }),
  },
);

export type ExerciseFrequency = z.infer<typeof ExerciseFrequency>;

let FitnessGoal = z.enum(["weight_loss", "muscle_gain", "maintenance"], {
  errorMap: () => ({
    message: "Fitness goal must be weight loss, muscle gain, or maintenance",
  }),
});

export type FitnessGoal = z.infer<typeof FitnessGoal>;

export let CalculateSchema = z.object({
  gender: Gender,
  age: z.string().regex(/^\d+$/, "Age must be a number"),
  weight: z.string().regex(/^\d+$/, "Weight must be a number"),
  "weight_unit": WeightUnit,
  height: z.string().regex(/^\d+$/, "Height must be a number"),
  "height_unit": HeightUnit,
  "activity_level": ActivityLevel,
  "exercise_frequency": ExerciseFrequency,
  "fitness_goal": FitnessGoal,
});
