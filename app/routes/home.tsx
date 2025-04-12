import type {PropsWithChildren} from "react";
import {Button} from "~/components/ui/button";
import {Input} from "~/components/ui/input";
import {Label} from "~/components/ui/label";
import {RadioGroup, RadioGroupItem} from "~/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";
import {cn} from "~/lib/utils";
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
					<form action="">
						<fieldset>
							<legend className="rounded-sm bg-foreground p-1 text-accent">
								<h2>Nutrition Calculator</h2>
								<p>Calculate your daily nutritional needs</p>
							</legend>

							<RadioGroup defaultValue="female" className="flex gap-2">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="female" id="female" />
									<Label htmlFor="female">Female</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="male" id="male" />
									<Label htmlFor="male">Male</Label>
								</div>
							</RadioGroup>

							<FormGroup>
								<Label htmlFor="age">
									Age:
									<Input
										type="number"
										id="age"
										name="age"
										placeholder="Enter your age"
										required
									/>
								</Label>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="weight">Weight:</Label>
								<RadioGroup defaultValue="kg" className="flex gap-2">
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="kg" id="kg" />
										<Label htmlFor="kg">Kg</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="lbs" id="lbs" />
										<Label htmlFor="lbs">Lbs</Label>
									</div>
								</RadioGroup>
								<Input
									type="number"
									id="weight"
									name="weight"
									placeholder="Enter your weight"
									required
								/>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="height">Height:</Label>
								<RadioGroup defaultValue="cm" className="flex gap-2">
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="cm" id="cm" />
										<Label htmlFor="cm">Cm</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="inches" id="inches" />
										<Label htmlFor="inches">Inches</Label>
									</div>
								</RadioGroup>
								<Input
									type="number"
									id="height"
									name="height"
									placeholder="Enter your height"
									required
								/>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="activity-level">
									Activity Level:
									<Select>
										<SelectTrigger className="w-[180px]">
											<SelectValue placeholder="activity-level" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Activity Level</SelectLabel>
												<SelectItem value="sedentary">Sedentary</SelectItem>
												<SelectItem value="lightly-active">
													Lightly Active
												</SelectItem>
												<SelectItem value="moderately-active">
													Moderately Active
												</SelectItem>
												<SelectItem value="very-active">Very Active</SelectItem>
												<SelectItem value="super-active">
													Super Active
												</SelectItem>
												<SelectItem value="extremely-active">
													Extremely Active
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</Label>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="exercise-frequency">
									Exercise Frequency:
									<Select>
										<SelectTrigger className="w-[180px]">
											<SelectValue placeholder="exercise-frequency" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Exercise Frequency</SelectLabel>
												<SelectItem value="none">None</SelectItem>
												<SelectItem value="1-2-times-a-week">
													1-2 times a week
												</SelectItem>
												<SelectItem value="3-4-times-a-week">
													3-4 times a week
												</SelectItem>
												<SelectItem value="5-or-more-times-a-week">
													5 or more times a week
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</Label>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="fitness-goals">
									Fitness Goals:
									<Select>
										<SelectTrigger className="w-[180px]">
											<SelectValue placeholder="fitness-goals" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Fitness Goals</SelectLabel>
												<SelectItem value="weight-loss">Weight Loss</SelectItem>
												<SelectItem value="muscle-gain">Muscle Gain</SelectItem>
												<SelectItem value="endurance">Endurance</SelectItem>
												<SelectItem value="maintain-weight">
													Maintain Weight
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</Label>
							</FormGroup>
							<Button type="submit">Calculate Nutrition</Button>
						</fieldset>
					</form>
				</div>
			</main>
		</>
	);
}

function FormGroup({
	children,
	className,
}: PropsWithChildren<{
	className?: string;
}>) {
	return <div className={cn("", className)}>{children}</div>;
}
