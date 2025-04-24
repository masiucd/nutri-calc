import {AnimatePresence, motion} from "motion/react";
import type {PropsWithChildren} from "react";
import {Icons} from "~/components/icons";
import {H3, List} from "~/components/typography";
import {Alert, AlertDescription, AlertTitle} from "~/components/ui/alert";
import {Button} from "~/components/ui/button";
import {copyToClipBoard} from "~/lib/copy-to-clipboard";
import {
	recommendedCarbs,
	recommendedFats,
	recommendedProtein,
} from "~/lib/recommended-macros";
import type {CalculateAction} from "~/routes/applications";

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

export function ErrorAlert({actionData}: {actionData: CalculateAction}) {
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

export function ResultAlert({actionData}: {actionData: CalculateAction}) {
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
