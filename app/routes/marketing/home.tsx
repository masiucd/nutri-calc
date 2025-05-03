import {Link} from "react-router";
import {A} from "~/components/a";
import {PageWrapper} from "~/components/page-wrapper";
import {MathPi} from "~/components/svgs/math";
import {H1, H2, H3, Lead, P} from "~/components/typography";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";

export function meta() {
	return [
		{title: "Nutri calc"},
		{
			name: "description",
			content: "A nutrition calculator for your dietary needs.",
		},
	];
}

export default function HomeRoute() {
	return (
		<PageWrapper fluid>
			<TopWithHero />
			<MiddleWithCards />
			<Bottom />
		</PageWrapper>
	);
}

function TopWithHero() {
	return (
		<section className="mb-10 flex flex-1 items-center rounded-md bg-app/20 py-50 shadow-sm">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex flex-1 flex-col gap-2 md:pr-20 md:pl-5">
					<div className="space-y-1">
						<H1 className="text-pretty ">
							Track Your Calories, Achieve Your Goals
						</H1>
						<Lead className="text-balance">
							Our easy-to-use calorie calculator helps you understand your daily
							energy needs, making it simple to reach your health and fitness
							goals.
						</Lead>
					</div>
					<div className="flex gap-5">
						<A
							to="/calculate"
							aria-description="Calculate your daily nutritional needs"
						>
							{/* <TextShimmerWave
					className="[--base-color:#333] [--base-gradient-color:#5EB1EF]"
					duration={2}
					spread={3}
					zDistance={1}
					scaleDistance={1.1}
					rotateYDistance={10}
				> */}
							Calculate your daily nutritional needs
							{/* </TextShimmerWave> */}
						</A>
						<A to="/about" aria-description="Learn more about us">
							Learn More
						</A>
					</div>
				</div>
				<div className="flex-1 rounded-md bg-gray-400/40 shadow-sm">
					<MathPi />
				</div>
			</div>
		</section>
	);
}

function MiddleWithCards() {
	return (
		<section className="my-10">
			<div className="container mx-auto flex flex-col items-center gap-2 py-20">
				<div className="mb-5 flex flex-col items-center">
					<H2>Features</H2>
					<Lead className="text-pretty">
						Our calorie calculator provides everything you need to track and
						manage your nutrition.
					</Lead>
				</div>
				<div className="flex gap-10">
					<Card>
						<CardHeader>
							<CardTitle>Features</CardTitle>
							<CardDescription>
								Our calorie calculator provides everything you need to track and
								manage your nutrition.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<P>
								Our calculator uses proven scientific methods to determine your
								daily caloric needs with precision.
							</P>
						</CardContent>
						<CardFooter>
							<A className="w-fit text-app text-sm" to="/calculate">
								Try Now
							</A>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Personalized Results</CardTitle>
							<CardDescription>Customized to your goals</CardDescription>
						</CardHeader>
						<CardContent>
							<P>
								Whether you want to lose weight, gain muscle, or maintain your
								current weight, our calculator tailors results to your specific
								goals.
							</P>
						</CardContent>
						<CardFooter>
							<A className="w-fit text-app text-sm" to="/calculate">
								Try Now
							</A>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>User-Friendly Interface</CardTitle>
							<CardDescription>Easy to navigate and understand</CardDescription>
						</CardHeader>
						<CardContent>
							<P>
								Our intuitive design ensures that you can quickly and easily
								navigate the calculator, making it accessible for everyone.
							</P>
						</CardContent>
						<CardFooter>
							<A className="w-fit text-app text-sm" to="/calculate">
								Try Now
							</A>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
}

function Bottom() {
	return (
		<section className="bg-app/20">
			<div className="flex justify-center py-20">
				<div className="flex flex-col items-center justify-center gap-2 sm:max-w-2xl">
					<H3>Ready to Get Started? </H3>
					<Lead className="text-balance">
						Join thousands of users who have transformed their health with Take
						the first step toward your health and fitness goals today.
					</Lead>
					<Link
						to="/calculate"
						className="flex items-center gap-2 underline underline-offset-2 duration-150 hover:text-blue-500 hover:opacity-45"
						aria-description="Calculate your daily nutritional needs"
					>
						Calculate your daily nutritional needs
					</Link>
				</div>
			</div>
		</section>
	);
}
