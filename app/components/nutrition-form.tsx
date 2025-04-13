import {Activity, User} from "lucide-react";
import type {PropsWithChildren} from "react";
import {Form} from "react-router";
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
import {Separator} from "./ui/separator";

export function NutritionForm() {
	return (
		<Form action="/home" method="post">
			<fieldset className="rounded-md border-2 p-2 shadow-lg">
				<legend className="mb-5 rounded-sm bg-foreground p-1 text-accent">
					<h2>Nutrition Calculator</h2>
					<p>Calculate your daily nutritional needs</p>
				</legend>

				<div className="flex flex-col">
					<span className="mb-3 flex gap-1">
						<User className="text-blue-500" /> Fitness Profile
					</span>

					<div className="grid grid-cols-4 grid-rows-4 gap-4">
						<FormGroup className="col-span-2 row-span-2">
							<RadioGroup
								defaultValue="female"
								className="flex flex-col gap-3"
								name="gender"
							>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="female" id="female" />
									<Label htmlFor="female">Female</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="male" id="male" />
									<Label htmlFor="male">Male</Label>
								</div>
							</RadioGroup>
						</FormGroup>

						<FormGroup className="col-span-2 col-start-3 row-span-2">
							<Label htmlFor="age">Age:</Label>
							<Input
								type="number"
								id="age"
								name="age"
								placeholder="Enter your age"
								required
							/>
						</FormGroup>

						<FormGroup className="col-span-2 row-span-2 row-start-3">
							<Label htmlFor="weight">Weight:</Label>
							<div className="flex">
								<Input
									type="number"
									id="weight"
									name="weight"
									placeholder="Enter your weight"
									required
								/>

								<Select>
									<SelectTrigger className="w-[100px]">
										<SelectValue placeholder="kg" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Weight Unit</SelectLabel>
											<SelectItem value="kg">Kg</SelectItem>
											<SelectItem value="lb">Lb</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</FormGroup>

						<FormGroup className="col-span-2 col-start-3 row-span-2 row-start-3">
							<Label htmlFor="height">Height:</Label>
							<div className="flex">
								<Input
									type="number"
									id="height"
									name="height"
									placeholder="Enter your height"
									required
								/>
								<Select>
									<SelectTrigger className="w-[100px]">
										<SelectValue placeholder="cm" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Height Unit</SelectLabel>
											<SelectItem value="cm">Cm</SelectItem>
											<SelectItem value="in">In</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</FormGroup>
					</div>
				</div>

				<Separator className="mb-5" />
				<div className="flex flex-col">
					<span className="mb-3 flex gap-1">
						<Activity className="text-blue-500" /> Activity & Goals
					</span>

					<FormGroup>
						<Label htmlFor="activity-level">Activity Level:</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select your activity level" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Activity Level</SelectLabel>
									<SelectItem value="sedentary">Sedentary</SelectItem>
									<SelectItem value="lightly-active">Lightly Active</SelectItem>
									<SelectItem value="moderately-active">
										Moderately Active
									</SelectItem>
									<SelectItem value="very-active">Very Active</SelectItem>
									<SelectItem value="super-active">Super Active</SelectItem>
									<SelectItem value="extremely-active">
										Extremely Active
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</FormGroup>

					<FormGroup>
						<Label htmlFor="exercise-frequency">Exercise Frequency:</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select your Exercise Frequency" />
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
					</FormGroup>

					<FormGroup>
						<Label htmlFor="fitness-goals">Fitness Goals:</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select your fitness goal" />
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
					</FormGroup>
				</div>
				<Button type="submit">Calculate Nutrition</Button>
			</fieldset>
		</Form>
	);
}

function FormGroup({
	children,
	className,
}: PropsWithChildren<{
	className?: string;
}>) {
	return (
		<div className={cn("mb-5 flex flex-col gap-1", className)}>{children}</div>
	);
}
