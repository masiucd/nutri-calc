import type {Route} from "./+types/home";

export async function action({request}: Route.ActionArgs) {
	let data = await request.formData();
	let gender = data.get("gender");
	console.log({gender});

	return null;
}

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
			</main>
		</>
	);
}
