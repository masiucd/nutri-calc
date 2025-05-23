import {type PropsWithChildren, useEffect, useRef, useState} from "react";
import {Form} from "react-router";
import {Icons} from "~/components/icons";
import {PageWrapper} from "~/components/page-wrapper";
import {H1, H2, H3, Lead, P} from "~/components/typography";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {Button} from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import {Input} from "~/components/ui/input";
import {Label} from "~/components/ui/label";
import {Textarea} from "~/components/ui/textarea";
import {cn} from "~/lib/utils";
import {formSchema} from "~/server/schemas/about";
import type {Route} from "./+types/about";

export async function action({request}: Route.ActionArgs) {
	let formData = await request.formData();
	let form = Object.fromEntries(formData.entries());
	let result = formSchema.safeParse(form);
	if (!result.success) {
		let errors = result.error.flatten().fieldErrors;
		return {
			status: 400,
			errors: errors,
		};
	}
	return {
		status: 200,
		message: "Form submitted successfully",
	};
}

export default function AboutRoute({actionData}: Route.ComponentProps) {
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
					<ReviewBox description="I appreciate the privacy-first approach. I feel safe using this app." />
				</div>
			</section>
			<section className="flex flex-col items-center justify-center">
				<div className="mb-10 flex flex-col items-center justify-center">
					<H3>Frequently Asked Questions</H3>
					<Lead>
						Get answers to common questions about calorie counting and
						nutrition.
					</Lead>
				</div>
				<AboutQuestions />
			</section>
			<section className="flex flex-col items-center justify-center">
				<div className=" flex flex-col items-center justify-center">
					<H3>Get In Touch</H3>
					<Lead>Have questions or feedback? We'd love to hear from you.</Lead>
				</div>
				<ContactForm actionData={actionData} />
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

function AboutCards() {
	return (
		<section className="mb-10 grid grid-cols-4 grid-rows-4 gap-5">
			{aboutContent.map((item) => (
				<AboutCard
					key={item.title}
					title={item.title}
					className="col-span-2 row-span-2"
					icon={item.icon}
				>
					<P>{item.descriptionOne}</P>
					<P>{item.descriptionTwo}</P>
				</AboutCard>
			))}
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

export function AboutQuestions() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{accordionItems.map((item) => (
				<AccordionItem key={item.value} value={item.value} className="w-full">
					<AccordionTrigger className="text-lg">{item.title}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}

function ContactForm({
	actionData,
}: {
	actionData: Route.ComponentProps["actionData"];
}) {
	let [state, setState] = useState<"idle" | "success" | "error">("idle");
	let formRef = useRef<HTMLFormElement | null>(null);
	useActionDataState(actionData, formRef, setState);

	return (
		<Card
			className={cn(
				"mt-5 w-full max-w-3xl border-2 transition-all duration-200",
				state === "error" && "border-destructive shadow-2xl",
				state === "success" && "border-green-500 shadow-2xl",
			)}
		>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Icons.Mail className="text-app" /> Contact Us
				</CardTitle>
			</CardHeader>
			<Form method="post" ref={formRef}>
				<fieldset className="space-y-6 p-5">
					<div className="flex gap-10">
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="name">Name</Label>
							<Input
								type="text"
								id="name"
								name="name"
								placeholder="your name..."
								required
							/>
						</div>
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								id="email"
								name="email"
								placeholder="example@ex.com"
								required
							/>
						</div>
					</div>
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="text">Subject</Label>
						<Input
							type="text"
							id="subject"
							name="subject"
							placeholder="Enter a subject..."
							required
						/>
					</div>
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="message">Message</Label>
						<Textarea
							id="message"
							placeholder="Some message..."
							className="resize-none"
							rows={5}
							name="message"
							required
						/>
					</div>
					<div className="mt-5 flex min-h-12 w-full items-center justify-center">
						{state === "error" && (
							<P className="text-destructive">
								{actionData?.errors?.message || "Something went wrong"}
							</P>
						)}
						{state === "success" && (
							<P className="text-green-500">
								{actionData?.message || "Message sent successfully!"}
							</P>
						)}
					</div>
					<div className="flex justify-center">
						<Button
							type="submit"
							className=" max-w-sm bg-app text-foreground hover:bg-app/80"
						>
							Send Message
						</Button>
					</div>
				</fieldset>
			</Form>
		</Card>
	);
}

function useActionDataState(
	actionData: Route.ComponentProps["actionData"],
	formRef: React.RefObject<HTMLFormElement | null>,
	setState: React.Dispatch<React.SetStateAction<"idle" | "success" | "error">>,
) {
	useEffect(() => {
		let timeOutId: NodeJS.Timeout;
		if (actionData?.status === 200) {
			setState("success");
			if (formRef.current) {
				formRef.current.reset();
			}
			timeOutId = setTimeout(() => {
				setState("idle");
			}, 3000);
		}
		if (actionData?.status === 400) {
			setState("error");
			timeOutId = setTimeout(() => {
				setState("idle");
			}, 3000);
		}

		return () => {
			if (timeOutId) {
				clearTimeout(timeOutId);
			}
		};
	}, [actionData, formRef.current, setState]);
}

const AboutCardIconsSize = 30;
const iconStyles = "text-app";
let aboutContent = [
	{
		title: "Our Mission",
		descriptionOne:
			"CalorieTrack was created with a simple yet powerful mission: to help people make informed nutritional choices through accurate, science-based calorie tracking.",
		descriptionTwo:
			"We believe that understanding energy balance is the foundation for sustainable health and fitness goals. Our calculator provides personalized recommendations based on your unique profile and objectives.",
		icon: <Icons.BarChart size={AboutCardIconsSize} className={iconStyles} />,
	},
	{
		title: "The Science",
		descriptionOne:
			"Our calorie calculator uses the Mifflin-St Jeor equation, widely recognized as the most accurate formula for estimating Basal Metabolic Rate (BMR).",
		descriptionTwo:
			"We then apply activity multipliers based on your lifestyle to determine your Total Daily Energy Expenditure (TDEE). This gives you a precise starting point for your nutritional planning, whether your goal is weight loss, maintenance, or muscle gain.",
		icon: <Icons.Calculator size={AboutCardIconsSize} className={iconStyles} />,
	},
	{
		title: "The Team",
		descriptionOne:
			"CalorieTrack was developed by a dedicated team of nutritionists, fitness experts, and software engineers passionate about improving public health through technology.",
		descriptionTwo:
			"Our multidisciplinary approach ensures that the calculator is not only technically robust but also practical and easy to use in everyday life. We continuously update our formulas based on the latest nutritional research.",
		icon: <Icons.Users size={AboutCardIconsSize} className={iconStyles} />,
	},
	{
		title: "Privacy & Data",
		descriptionOne:
			"We take your privacy seriously. CalorieTrack is designed with a privay-first approach — your personal data is never sold, shared, or used for advertising purposes.",
		descriptionTwo:
			"All calculations can be performed locally on your device, and you choose what data to save. We employ industry-standard encryption for any information you opt to store in your account.",
		icon: (
			<Icons.ShieldCheck size={AboutCardIconsSize} className={iconStyles} />
		),
	},
] as const;

const accordionItems = [
	{
		title: "How accurate is calorie counting for weight loss?",
		content:
			"Calorie counting is a useful tool for weight loss, but it's not the only factor. It provides a good estimate of your energy needs, but individual variations in metabolism, activity level, and food choices can affect results.",
		value: "item-1",
	},

	{
		title: "How does the calorie calculator determine my daily needs?",
		content: `The calculator uses the Mifflin-St Jeor equation to estimate your
					Basal Metabolic Rate (BMR) based on your personal information
					(age,sex, weight, height) and then applies an activity multiplier to
					determine your Total Daily Energy Expenditure (TDEE). Your TDEE is the
					number of calories you need to maintain your current weight, and you
					can adjust your intake based on your goals (e.g., weight loss,
					maintenance, or muscle gain).`,
		value: "item-2",
	},
	{
		title: "Should I count calories from beverages too?",
		content:
			"Yes, it's important to include calories from beverages in your daily intake. Many drinks, especially sugary ones, can contribute a significant number of calories without providing much nutritional value. Be sure to account for all sources of calories to get an accurate picture of your daily intake.",
		value: "item-3",
	},
	{
		title: "How often should I recalculate my calorie needs?",
		content:
			"You should recalculate your calorie needs whenever you experience significant changes in your weight, activity level, or body composition. It's also a good idea to reassess your needs every few months to ensure you are on track with your goals. Regularly updating your calorie needs can help you adjust your intake and maintain progress.",
		value: "item-4",
	},
] as const;
