import type {ReactNode} from "react";
import {Outlet} from "react-router";
import {cn} from "~/lib/utils";

type Props = {
	className?: string;
	header?: ReactNode | null;
	footer?: ReactNode | null;
};

export function BaseLayout({className, header = null, footer = null}: Props) {
	return (
		<>
			{header}
			<main
				className={cn(
					"flex h-full w-full flex-col items-center justify-center p-4",
					className,
				)}
			>
				<Outlet />
			</main>
			{footer}
		</>
	);
}
