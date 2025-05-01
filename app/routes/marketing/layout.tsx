import {Link} from "react-router";
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
										<Link
											className="relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-app/30 after:transition-all after:duration-200 after:content-[''] hover:opacity-80 hover:after:w-full"
											to={to}
										>
											{name}
										</Link>
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
