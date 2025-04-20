import {AnimatePresence, motion} from "motion/react";
import type {PropsWithChildren} from "react";
import {toast} from "sonner";
import {Icons} from "~/components/icons";
import {NutritionForm} from "~/components/nutrition-form";
import {H1, H3, Lead, List} from "~/components/typography";
import {Alert, AlertDescription, AlertTitle} from "~/components/ui/alert";
import {Button} from "~/components/ui/button";
import {Toaster} from "~/components/ui/sonner";
import {calculateNutritionalNeeds} from "~/server/calculate-nutrition.server";
import {CalculateSchema} from "~/server/schemas/calculate";
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
		console.log("Parsed data:", parsedData.data);
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
		<main className="flex flex-col items-center justify-center pt-16 pb-4">
			<Toaster position="top-right" />
			<div className="mb-5 flex flex-col gap-1">
				<H1>Nutrition Calculator</H1>
				<Lead>Calculate your daily nutritional needs</Lead>
			</div>
			<div>
				<NutritionForm />
				<div>
					<ResultAlert actionData={actionData} />
					<ErrorAlert actionData={actionData} />
				</div>
			</div>
		</main>
	);
}

function copyToClipBoard(calculatedData: number) {
	if ("clipboard" in navigator) {
		navigator.clipboard.writeText(
			`Your daily caloric needs are ${calculatedData} calories. \n 
			Recommended macros: \n
			Protein: ${recommendedProtein(calculatedData)} g \n
			Fats: ${recommendedFats(calculatedData)} g \n
			Carbs: ${recommendedCarbs(calculatedData)} g \n
			`,
		);
		toast("Results copied to clipboard!");
	} else {
		toast("Your browser does not support the Clipboard API.");
	}
}

function AlertWrapper({children}: PropsWithChildren) {
	return (
		<motion.div
			initial={{opacity: 0, y: -20}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: -20}}
			transition={{duration: 0.3}}
		>
			{children}
		</motion.div>
	);
}

function ErrorAlert({actionData}: Pick<Route.ComponentProps, "actionData">) {
	return (
		<AnimatePresence>
			{actionData?.errors && (
				<AlertWrapper>
					<Alert variant="destructive">
						<Icons.TriangleAlert />
						<AlertTitle>Heads up!</AlertTitle>
						<AlertDescription>
							<p className="text-sm">
								There were some errors with your submission. Please check the
								form and try again.
							</p>
						</AlertDescription>
					</Alert>

					<pre>{JSON.stringify(actionData.errors, null, 2)}</pre>
				</AlertWrapper>
			)}
		</AnimatePresence>
	);
}

function ResultAlert({actionData}: Pick<Route.ComponentProps, "actionData">) {
	return (
		<AnimatePresence>
			{actionData?.data && (
				<AlertWrapper>
					<Alert className="relative">
						<Icons.Check />
						<Button
							variant="ghost"
							className="absolute top-2 right-2"
							onClick={() => {
								copyToClipBoard(actionData.data.calculatedData);
							}}
						>
							<Icons.Copy />
						</Button>

						<AlertTitle>
							Result for a {actionData.data.weight} {actionData.data.weightUnit}{" "}
							{actionData.data.gender}
						</AlertTitle>
						<AlertDescription>
							<p className="text-sm">
								Your daily caloric needs are {actionData.data.calculatedData}{" "}
								calories.
							</p>
							<div>
								<H3>Recommended macros </H3>
								<List>
									<li>
										Protein:{" "}
										{recommendedProtein(actionData.data.calculatedData)} g
									</li>
									<li>
										Fats: {recommendedFats(actionData.data.calculatedData)} g
									</li>
									<li>
										Carbs: {recommendedCarbs(actionData.data.calculatedData)} g
									</li>
								</List>
							</div>
						</AlertDescription>
					</Alert>
				</AlertWrapper>
			)}
		</AnimatePresence>
	);
}

function recommendedProtein(caloricNeeds: number, proteinPercentage = 0.3) {
	return Math.round((caloricNeeds * proteinPercentage) / 4);
}

function recommendedFats(caloricNeeds: number, fatsPercentage = 0.25) {
	return Math.round((caloricNeeds * fatsPercentage) / 9);
}

function recommendedCarbs(caloricNeeds: number, carbsPercentage = 0.45) {
	return Math.round((caloricNeeds * carbsPercentage) / 4);
}
