import {Outlet} from "react-router";
import {H1, Lead} from "~/components/typography";

export default function ApplicationsLayout() {
	return (
		// TODO: Create a base main component, since we are using the same styles in the marketing layout
		<main className="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-center bg-red-200 p-4">
			<div className="mb-5 flex flex-col gap-1">
				<H1>Nutrition Calculator</H1>
				<Lead>Calculate your daily nutritional needs</Lead>
			</div>
			<Outlet />
		</main>
	);
}
