import {NutritionForm} from "~/components/nutrition-form";
import type {Route} from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{title: "Nutri calc"},
		{
			name: "description",
			content: "A nutrition calculator for your dietary needs.",
		},
	];
}

export default function Home() {
	return (
		<>
			<main className="flex flex-col items-center justify-center pt-16 pb-4">
				<h1>Welcome to Nutri Calc</h1>
				<div>
					<NutritionForm />
				</div>
			</main>
		</>
	);
}
