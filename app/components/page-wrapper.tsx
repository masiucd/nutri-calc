import type {PropsWithChildren} from "react";
import {cn} from "~/lib/utils";

export function PageWrapper({
	children,
	className,
}: PropsWithChildren<{className?: string}>) {
	return (
		<div
			className={cn(
				"flex w-full max-w-6xl flex-1 flex-col bg-blue-200",
				className,
			)}
		>
			{children}
		</div>
	);
}
