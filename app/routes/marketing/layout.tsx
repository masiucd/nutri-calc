import {Outlet} from "react-router";

export default function MarketingLayout() {
	return (
		<>
			<header>
				<div className="h-16">
					<strong>Header</strong>
				</div>
			</header>
			<main className="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-center bg-red-200 p-4">
				<Outlet />
			</main>
			<footer>
				<div className="h-16">
					<strong>Footer</strong>
				</div>
			</footer>
		</>
	);
}
