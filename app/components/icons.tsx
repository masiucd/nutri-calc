import {
	Activity,
	BarChart,
	Calculator,
	Check,
	Copy,
	Mail,
	MoveLeft,
	ShieldCheck,
	TriangleAlert,
	Users,
} from "lucide-react";

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
	Users: (props: Props) => <Users size={20} {...props} />,
	BarChart: (props: Props) => <BarChart size={20} {...props} />,
	ShieldCheck: (props: Props) => <ShieldCheck size={20} {...props} />,
	Activity: (props: Props) => <Activity size={20} {...props} />,
	Mail: (props: Props) => <Mail size={20} {...props} />,
} as const;
