import {BaseLayout} from "~/components/base-layout";

export default function MarketingLayout() {
	return (
		<BaseLayout
			header={
				<header>
					<div className="h-16">
						<strong>Header</strong>
					</div>
				</header>
			}
			footer={
				<footer>
					<div className="h-16">
						<strong>Footer</strong>
					</div>
				</footer>
			}
			className="min-h-[calc(100dvh-8rem)]"
		/>
	);
}
