import type {PropsWithChildren} from "react";
import {Link} from "react-router";
import {cn} from "~/lib/utils";

type Props = {
	to: string;
	className?: string;
};

export function A({className, to, children}: PropsWithChildren<Props>) {
	return (
		<Link
			className={cn(
				"relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-app/80 after:transition-all after:duration-200 after:content-[''] hover:opacity-80 hover:after:w-full",
				className,
			)}
			to={to}
		>
			{children}
		</Link>
	);
}
