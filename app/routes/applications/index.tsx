import {ErrorAlert, ResultAlert} from "~/components/alerts";
import {NutritionForm} from "~/components/nutrition-form";
import {Toaster} from "~/components/ui/sonner";
import {calculateNutritionalNeeds} from "~/server/calculate-nutrition.server";
import {CalculateSchema} from "~/server/schemas/calculate";
import type {Route} from "./+types";

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
			fitness_goal,
		} = parsedData.data;
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

	return {
		errors: parsedData.error.format(),
		data: null,
	};
}

export default function CalculateRoute({actionData}: Route.ComponentProps) {
	return (
		<>
			<Toaster position="top-right" />

			<div className="w-full max-w-2xl px-4 py-2">
				<NutritionForm />
				<div>
					<ResultAlert actionData={actionData} />
					<ErrorAlert actionData={actionData} />
				</div>
			</div>
		</>
	);
}
