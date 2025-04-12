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

							<div>
								<label htmlFor="age">
									Age:
									<input
										type="number"
										id="age"
										name="age"
										placeholder="Enter your age"
										required
									/>
								</label>
							</div>
							<div>
								<label htmlFor="weight">
									Weight:
									<input
										type="number"
										id="weight"
										name="weight"
										placeholder="Enter your weight"
										required
									/>
								</label>
							</div>

							<div>
								<label htmlFor="height">
									Height:
									<input
										type="number"
										id="height"
										name="height"
										placeholder="Enter your height"
										required
									/>
								</label>
							</div>

							<div>
								<label htmlFor="activity-level">
									Activity Level:
									<select id="activity-level" name="activity-level" required>
										<option value="sedentary">Sedentary</option>
										<option value="lightly-active">Lightly Active</option>
										<option value="moderately-active">Moderately Active</option>
										<option value="very-active">Very Active</option>
									</select>
								</label>
							</div>

							<div>
								<span>Gender</span>
								<label>
									male
									<input type="radio" name="male" id="male" />
								</label>
								<label>
									female
									<input type="radio" name="female" id="female" />
								</label>
							</div>

							<div>
								<label htmlFor="exercise-frequency">
									Exercise Frequency:
									<select name="exercise-frequency" id="exercise-frequency">
										<option value="none">None</option>
										<option value="1-2-times-a-week">1-2 times a week</option>
										<option value="3-4-times-a-week">3-4 times a week</option>
										<option value="5-or-more-times-a-week">
											5 or more times a week
										</option>
									</select>
								</label>
							</div>

							<div>
								<label htmlFor="fitness-goals">
									Fitness Goals:
									<select name="fitness-goals" id="fitness-goals">
										<option value="weight-loss">Weight Loss</option>
										<option value="muscle-gain">Muscle Gain</option>
										<option value="endurance">Endurance</option>

										<option value="maintain-weight">Maintain Weight</option>
									</select>
								</label>
							</div>
						</fieldset>
					</form>
				</div>
			</main>
		</>
	);
}
