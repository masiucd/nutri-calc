import {Calculator, Check, Copy, MoveLeft, TriangleAlert} from "lucide-react";

type Props = {
	className?: string;
	size?: number;
};

export const Icons = {
	Calculator: (props: Props) => <Calculator size={20} {...props} />,
	Check: (props: Props) => <Check size={20} {...props} />,
	Copy: (props: Props) => <Copy size={20} {...props} />,
	MoveLeft: (props: Props) => <MoveLeft size={20} {...props} />,
	TriangleAlert: (props: Props) => <TriangleAlert size={20} {...props} />,
} as const;
