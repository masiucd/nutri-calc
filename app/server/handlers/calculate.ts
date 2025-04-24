import type {z} from "zod";
import {calculateNutritionalNeeds} from "~/server/calculate-nutrition.server";
import {CalculateSchema} from "~/server/schemas/calculate";

export function calculateHandler(data: FormData) {
	let parsedData = CalculateSchema.safeParse(Object.fromEntries(data));
	if (parsedData.success) {
		return processNutritionalData(parsedData.data);
	}
	return {
		errors: {
			message:
				"There were some errors with your submission. Please check the form and try again.",
			errors: parsedData.error.flatten().fieldErrors,
		},
		data: null,
	};
}

export type processNutritionalDataType = ReturnType<
	typeof processNutritionalData
>;
export type ReturnTypeCalculateHandler = ReturnType<typeof calculateHandler>;

function processNutritionalData(parsedData: z.infer<typeof CalculateSchema>) {
	let {
		weight,
		height,
		weight_unit,
		height_unit,
		gender,
		age,
		activity_level,
		fitness_goal,
	} = parsedData;
	let calculatedData = calculateNutritionalNeeds({
		weight: Number.parseFloat(weight),
		height: Number.parseFloat(height),
		weightUnit: weight_unit,
		heightUnit: height_unit,
		gender,
		age: Number.parseInt(age),
		activityLevel: activity_level,

		fitnessGoal: fitness_goal,
	});
	return {
		data: {
			calculatedData,
			weight: Number.parseFloat(weight),
			height: Number.parseFloat(height),
			weightUnit: weight_unit,
			heightUnit: height_unit,
			gender,
		},
		errors: null,
	};
}
