import {Link} from "react-router";
import {Icons} from "~/components/icons";
import {TextShimmerWave} from "~/components/motion-primitives/text-shimmer-wave";
import {PageWrapper} from "~/components/page-wrapper";
import {H1, Lead} from "~/components/typography";

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
		<PageWrapper>
			<div className="mb-5">
				<H1>Track Your Calories, Achieve Your Goals</H1>
				<Lead className="text-pretty">
					Our easy-to-use calorie calculator helps you understand your daily
					energy needs, making it simple to reach your health and fitness goals.
				</Lead>
			</div>
			<div className="flex">
				<Link
					to="/calculate"
					className="flex items-center gap-2 underline underline-offset-2 duration-150 hover:text-blue-500 hover:opacity-45"
					aria-description="Calculate your daily nutritional needs"
				>
					<Icons.Calculator />
					<TextShimmerWave
						className="[--base-color:#333] [--base-gradient-color:#5EB1EF]"
						duration={2}
						spread={3}
						zDistance={1}
						scaleDistance={1.1}
						rotateYDistance={10}
					>
						Calculate your daily nutritional needs
					</TextShimmerWave>
				</Link>
				<Link
					to="/about"
					className="flex items-center gap-2 underline underline-offset-2 duration-150 hover:text-blue-500 hover:opacity-45"
				>
					Lear More
				</Link>
			</div>
		</PageWrapper>
	);
}
