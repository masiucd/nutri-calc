import type {PropsWithChildren} from "react";
import {cn} from "~/lib/utils";

type Props = {
	className?: string;
	fluid?: boolean;
};

export function PageWrapper({
	children,
	className,
	fluid = false,
}: PropsWithChildren<Props>) {
	return (
		<div
			className={cn(
				"flex w-full max-w-6xl flex-1 flex-col",
				fluid && "max-w-full",
				className,
			)}
		>
			{children}
		</div>
	);
}
