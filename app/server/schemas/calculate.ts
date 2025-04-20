import {z} from "zod";

let Gender = z.enum(["female", "male"], {
	errorMap: () => ({message: "Gender must be female or male"}),
});
export type GenderType = z.infer<typeof Gender>;

let HeightUnit = z.enum(["cm", "in"], {
	errorMap: () => ({message: "Height unit must be cm or in"}),
});
export type HeightUnit = z.infer<typeof HeightUnit>;

let WeightUnit = z.enum(["kg", "lb"], {
	errorMap: () => ({message: "Weight unit must be kg or lb"}),
});
export type WeightUnit = z.infer<typeof WeightUnit>;

let ActivityLevel = z.enum(
	["sedentary", "lightly", "moderate", "very", "super", "extremely"],
	{
		errorMap: () => ({
			message:
				"Activity level must be sedentary, lightly active, moderately active, very active, or extremely active",
		}),
	},
);

export type ActivityLevel = z.infer<typeof ActivityLevel>;

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
	weight_unit: WeightUnit,
	height: z.string().regex(/^\d+$/, "Height must be a number"),
	height_unit: HeightUnit,
	activity_level: ActivityLevel,

	fitness_goal: FitnessGoal,
});
