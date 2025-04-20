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
	let bmr = bmrBasedOnFitnessGoal(
		calculateBmr({gender, age, w, h}),
		fitnessGoal,
	);
	return bmrToTdee(bmr, activityLevel);
}

function updateWeightBasedOnUnit(
	weight: number,
	weightUnit: WeightUnit,
): number {
	if (weightUnit === "kg") {
		return weight;
	}

	return weight * 0.453592; // Convert lb to kg
}

function bmrBasedOnFitnessGoal(bmr: number, fitnessGoal: FitnessGoal): number {
	if (fitnessGoal === "weight_loss") {
		return bmr - 500; // Calorie deficit
	}
	if (fitnessGoal === "muscle_gain") {
		return bmr + 500; // Calorie surplus
	}
	if (fitnessGoal === "maintenance") {
		return bmr; // Maintenance
	}
	return bmr;
}

function bmrToTdee(bmr: number, activityLevel: ActivityLevel): number {
	return Math.round(bmr * activityMultiplier[activityLevel]);
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

function getBaseBmr({w, h, age}: {w: number; h: number; age: number}) {
	return 10 * w + 6.25 * h - 5 * age;
}
// Mifflin-St Jeor Equation
function calculateBmr({
	gender,
	age,
	w,
	h,
}: {
	gender: GenderType;
	age: number;
	w: number;
	h: number;
}) {
	let bmr = getBaseBmr({w, h, age});
	if (gender === "male") {
		bmr += 5;
	} else if (gender === "female") {
		bmr -= 161;
	}
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
