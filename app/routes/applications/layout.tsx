import {Link} from "react-router";
import {BaseLayout} from "~/components/base-layout";
import {Icons} from "~/components/icons";

export default function ApplicationsLayout() {
	return (
		<BaseLayout
			header={
				<header>
					<div className="container mx-auto flex h-32 items-center">
						<Link
							to="/"
							aria-description="Back to The Home Page"
							className="underline underline-offset-2 transition-all duration-150 hover:opacity-50"
						>
							<strong className="flex items-center gap-2">
								<Icons.MoveLeft /> Back to Home
							</strong>
						</Link>
					</div>
				</header>
			}
			className="min-h-[calc(100dvh-8rem)]"
		/>
	);
}
