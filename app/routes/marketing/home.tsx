import {A} from "~/components/a";
import {PageWrapper} from "~/components/page-wrapper";
import {MathPi} from "~/components/svgs/math";
import {H1, H2, Lead, P} from "~/components/typography";
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
		<section className="mb-10 flex flex-1 items-center rounded-md bg-app/10 py-50 shadow-sm">
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
							Calculate your daily nutritional needs
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
				<div className="flex justify-between gap-10">
					<FeatureCard
						title="Privacy First"
						description="Your data is safe with us"
						content="We prioritize your privacy. Your data is never shared or sold."
						linkText="Learn More"
						linkTo="/about"
					/>
					<FeatureCard
						title="Community Support"
						description="Join our community"
						content="Connect with others on similar journeys and share tips."
						linkText="Join Now"
						linkTo="/about"
					/>
					<FeatureCard
						title="Mobile Friendly"
						description="Access anywhere, anytime"
						content="Our calculator is optimized for mobile devices, so you can track your nutrition on the go."
						linkText="Try Now"
						linkTo="/calculate"
					/>
				</div>
			</div>
		</section>
	);
}

function Bottom() {
	return (
		<section className="bg-app/10">
			<div className="flex justify-center py-20">
				<div className="flex flex-col items-center justify-center gap-2 sm:max-w-2xl">
					<Lead className="text-center">
						Join thousands of users who have transformed their health with Take
						the first step toward your health and fitness goals today.
					</Lead>
					<A
						to="/calculate"
						aria-description="Calculate your daily nutritional needs"
					>
						Calculate your daily nutritional needs
					</A>
				</div>
			</div>
		</section>
	);
}

function FeatureCard({
	title,
	description,
	content,
	linkText,
	linkTo,
}: {
	title: string;
	description: string;
	content: string;
	linkText: string;
	linkTo: string;
}) {
	return (
		<Card className="flex-1">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<P>{content}</P>
			</CardContent>
			<CardFooter className="mt-auto flex items-center gap-2">
				<A className="w-fit text-app text-sm" to={linkTo}>
					{linkText}
				</A>
			</CardFooter>
		</Card>
	);
}
