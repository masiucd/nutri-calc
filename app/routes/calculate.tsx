import {NutritionForm} from "~/components/nutrition-form";
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
	let gender = data.get("gender");
	let age = data.get("age");
	let weight = data.get("weight");
	let weightUnit = data.get("weight-unit");
	let height = data.get("height");
	let heightUnit = data.get("height-unit");
	let activityLevel = data.get("activity-level");
	let exerciseFrequency = data.get("exercise-frequency");
	let fitnessGoal = data.get("fitness-goal");

	return {
		gender,
		age,
		weight,
		weightUnit,
		height,
		heightUnit,
		activityLevel,
		exerciseFrequency,
		fitnessGoal,
	};
}

export default function CalculateRoute({actionData}: Route.ComponentProps) {
	console.log({actionData});
	return (
		<main className="flex flex-col items-center justify-center pt-16 pb-4">
			<div>
				<NutritionForm />
			</div>
		</main>
	);
}
