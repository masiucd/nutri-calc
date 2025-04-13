import {NutritionForm} from "~/components/nutrition-form";
import type {Route} from "./+types/calculate";

export function meta({}: Route.MetaArgs) {
	return [
		{title: "Nutri calc - Calculate"},
		{
			name: "description",
			content: "Calculate your daily nutritional needs.",
		},
	];
}

export default function CalculateRoute() {
	return (
		<main className="flex flex-col items-center justify-center pt-16 pb-4">
			<div>
				<NutritionForm />
			</div>
		</main>
	);
}
