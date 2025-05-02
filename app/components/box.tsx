import type {PropsWithChildren} from "react";
import {cn} from "~/lib/utils";

export function Box({
	className,
	children,
}: PropsWithChildren<{className?: string}>) {
	return (
		<div className={cn("size-68 rounded-md p-2 shadow-md", className)}>
			{children}
		</div>
	);
}

function Title({children, className}: PropsWithChildren<{className?: string}>) {
	return (
		<div className={cn("flex flex-col justify-center gap-1", className)}>
			{children}
		</div>
	);
}

function Content({
	children,
	className,
}: PropsWithChildren<{className?: string}>) {
	return (
		<div className={cn("mt-5 flex flex-col gap-2", className)}>{children}</div>
	);
}

Box.title = Title;
Box.content = Content;
