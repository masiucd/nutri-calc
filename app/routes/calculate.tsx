import {Check, Copy, TriangleAlert} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {NutritionForm} from "~/components/nutrition-form";
import {Alert, AlertDescription, AlertTitle} from "~/components/ui/alert";
import {Button} from "~/components/ui/button";
import {
	type ActivityLevel,
	CalculateSchema,
	type ExerciseFrequency,
	type FitnessGoal,
	type GenderType,
	type HeightUnit,
	type WeightUnit,
} from "~/schemas/calculate.server";
import type {Route} from "./+types/calculate";

export function meta({params}: Route.MetaArgs) {
	return [
		{title: "Nutri calc - Calculate"},
		{
			name: "description",
			content: "Calculate your daily nutritional needs.",
		},
	];
}

export async function action({request}: Route.ActionArgs) {
	let data = await request.formData();
	console.log("data", data);
	let parsedData = CalculateSchema.safeParse(Object.fromEntries(data));
	if (parsedData.success) {
		let {
			weight,
			height,
			weight_unit,
			height_unit,
			gender,
			age,
			activity_level,
			exercise_frequency,
			fitness_goal,
		} = parsedData.data;
		console.log("Parsed data:", parsedData.data);
		let calculatedData = calculateNutritionalNeeds({
			weight: Number.parseFloat(weight),
			height: Number.parseFloat(height),
			weightUnit: weight_unit,
			heightUnit: height_unit,
			gender,
			age: Number.parseInt(age),
			activityLevel: activity_level,
			exerciseFrequency: exercise_frequency,
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
	// handle the error and return the error messages so we can display them
	console.log("Error parsing data:", parsedData.error.format());
	return {
		errors: parsedData.error.format(),
		data: null,
	};
}

export default function CalculateRoute({actionData}: Route.ComponentProps) {
	console.log({actionData});
	return (
		<main className="flex flex-col items-center justify-center pt-16 pb-4">
			<div>
				<NutritionForm />
				<div>
					<AnimatePresence>
						{actionData?.data && (
							<motion.div
								initial={{opacity: 0, y: -20}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: -20}}
								transition={{duration: 0.3}}
							>
								<Alert>
									<Button
										onClick={() => {
											if ("clipboard" in navigator) {
												navigator.clipboard.writeText(
													`<h1> Your daily caloric needs are ${actionData.data.calculatedData} calories. </h1>`,
												);
											} else {
												// TODO make your own alert for this
												alert(
													"Your browser does not support the Clipboard API.",
												);
											}
										}}
									>
										<Copy size={20} />
									</Button>
									<Check size={20} />
									<AlertTitle>
										Result for a {actionData.data.weight}{" "}
										{actionData.data.weightUnit} {actionData.data.gender}
									</AlertTitle>
									<AlertDescription>
										<p className="text-sm">
											Your daily caloric needs are{" "}
											{actionData.data.calculatedData} calories.
										</p>
									</AlertDescription>
								</Alert>
							</motion.div>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{actionData?.errors && (
							<motion.div
								initial={{opacity: 0, y: -20}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: -20}}
								transition={{duration: 0.3}}
							>
								<Alert variant="destructive">
									<TriangleAlert size={20} />
									<AlertTitle>Heads up!</AlertTitle>
									<AlertDescription>
										<p className="text-sm">
											There were some errors with your submission. Please check
											the form and try again.
										</p>
									</AlertDescription>
								</Alert>

								<pre>{JSON.stringify(actionData.errors, null, 2)}</pre>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</main>
	);
}

function calculateNutritionalNeeds({
	weight,
	height,
	weightUnit,
	heightUnit,
	gender,
	age,
	activityLevel,
	exerciseFrequency,
	fitnessGoal,
}: {
	gender: GenderType;
	age: number;
	weight: number;
	height: number;
	activityLevel: ActivityLevel;
	exerciseFrequency: ExerciseFrequency;
	fitnessGoal: FitnessGoal;
	weightUnit: WeightUnit;
	heightUnit: HeightUnit;
}) {
	let w = weight;
	let h = height;

	// Convert weight to kg if it's in lb
	if (weightUnit === "lb") {
		w = w * 0.453592;
	}

	// Convert height to cm if it's in in
	if (heightUnit === "in") {
		h = h * 2.54;
	}

	// Calculate BMR using Mifflin-St Jeor Equation
	let bmr = 0;
	if (gender === "male") {
		bmr = 10 * w + 6.25 * h - 5 * age + 5;
	} else if (gender === "female") {
		bmr = 10 * w + 6.25 * h - 5 * age - 161;
	}

	// Adjust BMR based on activity level
	const activityMultiplier: Record<ActivityLevel, number> = {
		sedentary: 1.2,
		lightly_active: 1.375,
		moderate: 1.55,
		active: 1.725,
		very_active: 1.9,
	};
	bmr *= activityMultiplier[activityLevel];

	// Adjust BMR based on fitness goal
	if (fitnessGoal === "weight-loss") {
		bmr -= 500; // Calorie deficit
	} else if (fitnessGoal === "muscle-gain") {
		bmr += 500; // Calorie surplus
	}
	// if maintaining weight, no adjustment is needed

	if (exerciseFrequency === "never") {
		bmr -= 200; // Calorie deficit for no exercise
	} else if (exerciseFrequency === "1-2 times a week") {
		bmr -= 100; // Calorie deficit for light exercise
	} else if (exerciseFrequency === "3-4 times a week") {
		bmr += 100; // Calorie surplus for moderate exercise
	} else if (exerciseFrequency === "5-6 times a week") {
		bmr += 200; // Calorie surplus for heavy exercise
	}

	return Math.round(bmr);
}
