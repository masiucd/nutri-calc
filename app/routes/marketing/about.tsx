import type {PropsWithChildren} from "react";
import {Icons} from "~/components/icons";
import {PageWrapper} from "~/components/page-wrapper";
import {H1, H2, H3, Lead, P} from "~/components/typography";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import {cn} from "~/lib/utils";

export default function AboutRoute() {
	return (
		<PageWrapper className="gap-30">
			<Title />

			<AboutCards />

			<section className="mb-10 space-y-10">
				<div className="flex flex-col items-center justify-center">
					<H2>Success Stories</H2>
					<Lead>
						Discover how CalorieTrack has helped people achieve their health and
						fitness goals.
					</Lead>
				</div>
				<div className="flex justify-between gap-5">
					<ReviewBox description="I was skeptical at first, but this calculator has changed my life. I've lost 20 pounds in 3 months!" />
					<ReviewBox description="The Mifflin-St Jeor equation is spot on! I finally understand my calorie needs." />
					{/* <ReviewBox description="I love how easy it is to use. The interface is clean and intuitive." /> */}
					<ReviewBox description="I appreciate the privacy-first approach. I feel safe using this app." />
				</div>
			</section>
			<section>
				<div>
					<H3>Frequently Asked Questions</H3>
					<Lead>
						Get answers to common questions about calorie counting and
						nutrition.
					</Lead>
				</div>
			</section>
			<section>
				<div>
					<H3>Get In Touch</H3>
					<Lead>Have questions or feedback? We'd love to hear from you.</Lead>
				</div>
				<form>{/*  */}</form>
			</section>
		</PageWrapper>
	);
}

function ReviewBox({
	description,
	className,
}: {description: string; className?: string}) {
	return (
		<Card className={cn("w-full", className)}>
			<CardHeader>
				<CardTitle>
					<Icons.Quote className="text-app" size={30} />
				</CardTitle>
			</CardHeader>
			<CardContent>
				<P>{description}</P>
			</CardContent>
			<CardFooter className="mt-auto flex items-center gap-2">
				<Avatar className="size-10">
					<AvatarImage src="https://github.com/masiucd.png" alt="@masiucd" />
					<AvatarFallback>MCD</AvatarFallback>
				</Avatar>

				<div>
					<span className="block font-semibold">Marcell Ciszek Druzunski</span>
					<span className="block text-foreground/60">Soft ware developer</span>
				</div>
			</CardFooter>
		</Card>
	);
}

function Title() {
	return (
		<div className="mt-10 mb-5 flex flex-col items-center justify-center ">
			<H1>About Nutri Calc</H1>
			<Lead>
				Your personalized journey to better nutrition and a healthier lifestyle
				starts here.
			</Lead>
		</div>
	);
}

const AboutCardIconsSize = 30;
const iconStyles = "text-app";
function AboutCards() {
	return (
		<section className="mb-10 grid grid-cols-4 grid-rows-4 gap-5">
			<AboutCard
				title="Our Mission"
				className="col-span-2 row-span-2"
				icon={
					<Icons.BarChart size={AboutCardIconsSize} className={iconStyles} />
				}
			>
				<P>
					CalorieTrack was created with a simple yet powerful mission: to help
					people make informed nutritional choices through accurate,
					science-based calorie tracking.
				</P>
				<P>
					We believe that understanding energy balance is the foundation for
					sustainable health and fitness goals. Our calculator provides
					personalized recommendations based on your unique profile and
					objectives.
				</P>
			</AboutCard>

			<AboutCard
				title="The Science"
				className="col-span-2 row-span-2"
				icon={
					<Icons.Calculator size={AboutCardIconsSize} className={iconStyles} />
				}
			>
				<P>
					Our calorie calculator uses the Mifflin-St Jeor equation, widely
					recognized as the most accurate formula for estimating Basal Metabolic
					Rate (BMR).
				</P>
				<P>
					We then apply activity multipliers based on your lifestyle to
					determine your Total Daily Energy Expenditure (TDEE). This gives you a
					precise starting point for your nutritional planning, whether your
					goal is weight loss, maintenance, or muscle gain.
				</P>
			</AboutCard>
			<AboutCard
				title="The Team"
				className="col-span-2 row-span-2"
				icon={<Icons.Users size={AboutCardIconsSize} className={iconStyles} />}
			>
				<P>
					CalorieTrack was developed by a dedicated team of nutritionists,
					fitness experts, and software engineers passionate about improving
					public health through technology.
				</P>
				<P>
					Our multidisciplinary approach ensures that the calculator is not only
					technically robust but also practical and easy to use in everyday
					life. We continuously update our formulas based on the latest
					nutritional research.
				</P>
			</AboutCard>
			<AboutCard
				title="Privacy & Data"
				className="col-span-2 row-span-2"
				icon={
					<Icons.ShieldCheck size={AboutCardIconsSize} className={iconStyles} />
				}
			>
				<P>
					We take your privacy seriously. CalorieTrack is designed with a
					privay-first approach — your personal data is never sold, shared, or
					used for advertising purposes.
				</P>
				<P>
					All calculations can be performed locally on your device, and you
					choose what data to save. We employ industry-standard encryption for
					any information you opt to store in your account.
				</P>
			</AboutCard>
		</section>
	);
}

function AboutCard({
	title,
	icon,
	className,
	children,
}: PropsWithChildren<{
	title: string;
	icon?: React.ReactNode;
	className?: string;
}>) {
	return (
		<Card className={cn("col-span-2 row-span-2 p-5 shadow-md", className)}>
			<CardHeader>
				<CardTitle className="flex items-center gap-1">
					{icon}
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
