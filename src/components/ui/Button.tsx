import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(
				"mt-4 w-full rounded-lg bg-neutral-950 px-3 py-2 font-semibold text-neutral-50 transition ease-in-out hover:opacity-85 dark:bg-neutral-50 dark:text-neutral-950",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
