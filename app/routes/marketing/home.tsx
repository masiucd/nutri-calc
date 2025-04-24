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
				<H1>Welcome to Nutri Calc</H1>
				<Lead>
					A nutrition calculator for your dietary needs. Calculate your daily
					nutritional needs based on your weight, height
				</Lead>
			</div>
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
		</PageWrapper>
	);
}
