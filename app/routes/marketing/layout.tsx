import {BaseLayout} from "~/components/base-layout";

export default function MarketingLayout() {
	return (
		<BaseLayout
			header={
				<header>
					<div className="container mx-auto flex h-16 items-center">
						<strong>Nutri Calc</strong>
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
