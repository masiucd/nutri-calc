import {Outlet} from "react-router";
import {H1} from "~/components/typography";

export default function ApplicationsLayout() {
	return (
		<div>
			<H1>Applications Layout</H1>
			<Outlet />
		</div>
	);
}
