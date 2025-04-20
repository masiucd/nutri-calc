import {Check, Copy, TriangleAlert} from "lucide-react";

type Props = {
	className?: string;
	size?: number;
};

export const Icons = {
	Check: (props: Props) => <Check size={20} {...props} />,
	Copy: (props: Props) => <Copy size={20} {...props} />,
	TriangleAlert: (props: Props) => <TriangleAlert size={20} {...props} />,
} as const;
