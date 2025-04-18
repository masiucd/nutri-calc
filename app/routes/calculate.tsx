import {z} from "zod";
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

let CalculateSchema = z.object({
	gender: z.enum(["female", "male"], {
		errorMap: () => ({message: "Gender must be female or male"}),
	}),
	age: z.string().regex(/^\d+$/, "Age must be a number"),
	weight: z.string().regex(/^\d+$/, "Weight must be a number"),
	"weight-unit": z.enum(["kg", "lb"], {
		errorMap: () => ({message: "Weight unit must be kg or lb"}),
	}),
	height: z.string().regex(/^\d+$/, "Height must be a number"),
	"height-unit": z.enum(["cm", "in"], {
		errorMap: () => ({message: "Height unit must be cm or in"}),
	}),
	"activity-level": z.enum([
		"sedentary",
		"lightly-active",
		"moderately-active",
		"very-active",
		"super-active",
		"extremely-active",
	]),
	"exercise-frequency": z.enum([
		"none",
		"1-2-times-a-week",
		"3-4-times-a-week",
		"5-or-more-times-a-week",
	]),

	"fitness-goal": z.enum(["weight-loss", "muscle-gain", "maintenance"]),
	// "fitness-goal": z.string(),
});

export async function action({request}: Route.ActionArgs) {
	let data = await request.formData();
	let parsedData = CalculateSchema.safeParse(Object.fromEntries(data));
	if (parsedData.success) {
		//  do something with the data
		console.log("Parsed data:", parsedData.data);
		return {
			data: parsedData.data,
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
					{actionData && (
						<div className="mt-4">
							<h2 className="font-bold text-lg">Results</h2>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
