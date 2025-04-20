import type {
	ActivityLevel,
	FitnessGoal,
	GenderType,
	HeightUnit,
	WeightUnit,
} from "~/server/schemas/calculate";

export function calculateNutritionalNeeds({
	weight,
	height,
	weightUnit,
	heightUnit,
	gender,
	age,
	activityLevel,
	fitnessGoal,
}: {
	gender: GenderType;
	age: number;
	weight: number;
	height: number;
	activityLevel: ActivityLevel;
	fitnessGoal: FitnessGoal;
	weightUnit: WeightUnit;
	heightUnit: HeightUnit;
}) {
	let w = updateWeightBasedOnUnit(weight, weightUnit);
	let h = updateHeightBasedOnUnit(height, heightUnit);

	// Calculate BMR using Mifflin-St Jeor Equation
	let bmr = calculateBmr({ gender, age, w, h, activityLevel });

	// Adjust BMR based on fitness goal
	if (fitnessGoal === "weight_loss") {
		bmr -= 500; // Calorie deficit
	} else if (fitnessGoal === "muscle_gain") {
		bmr += 500; // Calorie surplus
	}
	// if maintaining weight, no adjustment is needed
	return Math.round(bmr);
}

function updateWeightBasedOnUnit(
	weight: number,
	weightUnit: WeightUnit,
): number {
	if (weightUnit === "kg") {
		return weight;
	}
	// if (weightUnit === "lb")
	return weight * 0.453592; // Convert lb to kg
}

function updateHeightBasedOnUnit(
	height: number,
	heightUnit: HeightUnit,
): number {
	if (heightUnit === "cm") {
		return height;
	}
	// if (heightUnit === "in")
	return height * 2.54; // Convert in to cm
}

function calculateBmr({
	gender,
	age,
	w,
	h,
	activityLevel,
}: {
	gender: GenderType;
	age: number;
	w: number;
	h: number;
	activityLevel: ActivityLevel;
}) {
	let bmr = 0;
	if (gender === "male") {
		bmr = 10 * w + 6.25 * h - 5 * age + 5;
	} else if (gender === "female") {
		bmr = 10 * w + 6.25 * h - 5 * age - 161;
	}
	// if (gender === "female")

	bmr *= activityMultiplier[activityLevel];
	return bmr;
}

const activityMultiplier: Record<ActivityLevel, number> = {
	sedentary: 1.2,
	lightly: 1.375,
	moderate: 1.55,
	very: 1.725,
	super: 1.9,
	extremely: 2.0,
};
