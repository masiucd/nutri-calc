import {Link} from "react-router";
import {A} from "~/components/a";
import {PageWrapper} from "~/components/page-wrapper";
import {MathPi} from "~/components/svgs/math";
import {H1, H2, H3, Lead, P} from "~/components/typography";
import {cn} from "~/lib/utils";

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
			<section className="mb-10 flex flex-1 items-center rounded-md bg-app/20 py-50 shadow-sm">
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
			</section>
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
						<Box
							title="Accurate Calculations"
							description="Based on scientific formulas"
							content="Our calculator uses proven scientific methods to determine your daily caloric needs with precision."
							cta="Try Now"
							to="/calculate"
						/>
						<div className="size-64 bg-gray-600 shadow-md" />
						<div className="size-64 bg-gray-600 shadow-md" />
					</div>
				</div>
			</section>
			<section className="bg-app/20">
				<div className="flex justify-center py-20">
					<div className="flex flex-col items-center justify-center gap-2 border-2 sm:max-w-2xl">
						<H3>Ready to Get Started? </H3>
						<Lead className="text-balance">
							Join thousands of users who have transformed their health with
							Take the first step toward your health and fitness goals today.
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
		</PageWrapper>
	);
}

function Box({
	className,
	title,
	description,
	content,
	cta,
	to,
}: {
	className?: string;
	title: string;
	description: string;
	content: string;
	cta: string;
	to: string;
}) {
	return (
		<div className={cn("size-68 rounded-md p-2 shadow-md", className)}>
			<div className="flex flex-col justify-center gap-1">
				<H3>{title}</H3>
				<P className="text-foreground/50 text-sm leading-7 [&:not(:first-child)]:mt-0">
					{description}
				</P>
			</div>
			<div className="mt-5 flex flex-col gap-2">
				<P>{content}</P>
				<A className="w-fit text-app text-sm" to={to}>
					{cta}
				</A>
			</div>
		</div>
	);
}
