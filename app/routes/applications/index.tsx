import {ErrorAlert, ResultAlert} from "~/components/alerts";
import {NutritionForm} from "~/components/nutrition-form";
import {PageWrapper} from "~/components/page-wrapper";
import {H1, Lead} from "~/components/typography";
import {Toaster} from "~/components/ui/sonner";

import {calculateHandler} from "~/server/handlers/calculate";
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
	return calculateHandler(data);
}

export type CalculateAction = Route.ComponentProps["actionData"];

export default function CalculateRoute({actionData}: Route.ComponentProps) {
	return (
		<PageWrapper className="items-center justify-center">
			<Toaster position="top-right" />
			<div className="w-full max-w-2xl px-4 py-2">
				<div className="mr-auto mb-3 flex flex-col gap-1">
					<H1>Nutrition Calculator</H1>
					<Lead>Calculate your daily nutritional needs</Lead>
				</div>
				<NutritionForm />
				<div>
					<ResultAlert actionData={actionData} />
					<ErrorAlert actionData={actionData} />
				</div>
			</div>
		</PageWrapper>
	);
}
