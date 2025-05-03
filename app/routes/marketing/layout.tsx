import {Link} from "react-router";
import {A} from "~/components/a";
import {BaseLayout} from "~/components/base-layout";

let navItems = [
	{
		name: "calculate",
		to: "/calculate",
	},
	{
		name: "about",
		to: "/about",
	},
];

export default function MarketingLayout() {
	return (
		<BaseLayout
			header={
				<header>
					<div className="container mx-auto flex h-16 items-center justify-between">
						<Link to="/">
							<strong>Nutri Calc</strong>
						</Link>
						<nav>
							<ul className="flex gap-2">
								{navItems.map(({name, to}) => (
									<li key={name} className="capitalize">
										<A to={to}>{name}</A>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</header>
			}
			footer={
				<footer>
					<div className="container mx-auto flex h-16 items-center">
						<small className="text-gray-500 text-sm">
							&copy; {new Date().getFullYear()} Nutri Calc. All rights reserved.
						</small>
					</div>
				</footer>
			}
			className="min-h-[calc(100dvh-8rem)]"
		/>
	);
}
