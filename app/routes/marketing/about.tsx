import {Icons} from "~/components/icons";
import {PageWrapper} from "~/components/page-wrapper";
import {H1, H2, H3, H4, Lead, P} from "~/components/typography";

export default function AboutRoute() {
	return (
		<PageWrapper>
			<div className="flex flex-col mb-5">
				<H1>About Nutri Calc</H1>
				<Lead>
					Your personalized journey to better nutrition and a healthier
					lifestyle starts here.
				</Lead>
			</div>

			<section className="grid grid-cols-4 grid-rows-4 gap-5 mb-10">
				<div className="col-span-2 shadow-md row-span-2 rounded-md p-5">
					<H4 className="flex items-center gap-1">
						<Icons.BarChart className="text-app" /> Our Mission
					</H4>
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
				</div>
				<div className="col-span-2 row-span-2 shadow-md col-start-3 p-5 rounded-md">
					<H4 className="flex items-center gap-1">
						<Icons.Calculator className="text-app" />
						The Science
					</H4>
					<P>
						Our calorie calculator uses the Mifflin-St Jeor equation, widely
						recognized as the most accurate formula for estimating Basal
						Metabolic Rate (BMR)
					</P>
					<P>
						We then apply activity multipliers based on your lifestyle to
						determine your Total Daily Energy Expenditure (TDEE). This gives you
						a precise starting point for your nutritional planning, whether your
						goal is weight loss, maintenance, or muscle gain.
					</P>
				</div>
				<div className="col-span-2 row-span-2 row-start-3 p-5 shadow-md rounded-md">
					<H4 className="flex items-center gap-1">
						<Icons.Users className="text-app" /> The Team
					</H4>
					<P>
						CalorieTrack was developed by a dedicated team of nutritionists,
						fitness experts, and software engineers passionate about improving
						public health through technology.
					</P>
					<P>
						Our multidisciplinary approach ensures that the calculator is not
						only technically robust but also practical and easy to use in
						everyday life. We continuously update our formulas based on the
						latest nutritional research.
					</P>
				</div>
				<div className="col-span-2 row-span-2 col-start-3 p-5 row-start-3 shadow-md rounded-md">
					<H4 className="flex items-center gap-1">
						<Icons.ShieldCheck className="text-app" /> Privacy & Data
					</H4>
					<P>
						We take your privacy seriously. CalorieTrack is designed with a
						privacy-first approach — your personal data is never sold, shared,
						or used for advertising purposes.
					</P>
					<P>
						All calculations can be performed locally on your device, and you
						choose what data to save. We employ industry-standard encryption for
						any information you opt to store in your account.
					</P>
				</div>
			</section>

			<section>
				<div>
					<H2>Success Stories</H2>
					<Lead>
						Discover how CalorieTrack has helped people achieve their health and
						fitness goals.
					</Lead>
				</div>
				<div className="size-60 bg-gray-800 shadow-md" />
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
