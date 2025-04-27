import {Link} from "react-router";
import {PageWrapper} from "~/components/page-wrapper";
import {H1, H2, H3, Lead} from "~/components/typography";

export function meta() {
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
		<PageWrapper fluid>
			<section className="flex flex-1 items-center border-3 border-pink-400 bg-green-300/20">
				<div className="flex flex-col gap-2 border border-green-400 flex-1 md:pr-20">
					<div className="border border-blue-500 space-y-1">
						<H1 className="text-pretty">
							Track Your Calories, Achieve Your Goals
						</H1>
						<Lead className="text-balance">
							Our easy-to-use calorie calculator helps you understand your daily
							energy needs, making it simple to reach your health and fitness
							goals.
						</Lead>
					</div>
					<div className="flex gap-5">
						<Link
							to="/calculate"
							className="flex items-center gap-2 underline underline-offset-2 duration-150 hover:text-blue-500 hover:opacity-45"
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
						</Link>
						<Link
							to="/about"
							className="flex items-center gap-2 underline underline-offset-2 duration-150 hover:text-blue-500 hover:opacity-45"
							aria-description="Learn more about us"
						>
							Learn More
						</Link>
					</div>
				</div>
				<div className="flex-1 border border-orange-400">
					<div className="size-96 bg-foreground/30" />
				</div>
			</section>
			<section className="my-10">
				<div className="container mx-auto gap-2 border border-purple-500 flex flex-col  items-center">
					<div className="flex flex-col items-center">
						<H2>Features</H2>
						<Lead className="text-pretty">
							Our calorie calculator provides everything you need to track and
							manage your nutrition.
						</Lead>
					</div>
					<div className="flex gap-10">
						<div className="size-64 bg-gray-600 shadow-md" />
						<div className="size-64 bg-gray-600 shadow-md" />
						<div className="size-64 bg-gray-600 shadow-md" />
					</div>
				</div>
			</section>
			<section className="bg-green-300/20">
				<div>
					<H3>Ready to Get Started?</H3>
					<Lead>
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
			</section>
		</PageWrapper>
	);
}
