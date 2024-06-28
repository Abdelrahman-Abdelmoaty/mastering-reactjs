import { useFormContext } from "react-hook-form";
import { cn } from "../../lib/utils";

type ValidatedInputProps = {
	name: string;
	label: string;
	type?: React.HTMLInputTypeAttribute;
	placeholder?: string;
	icon?: React.ReactNode;
};

export default function ValidatedInput({
	name,
	label,
	type = "text",
	placeholder,
	icon,
}: ValidatedInputProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className="mb-4">
			<label htmlFor={name} className="mb-2 block font-bold">
				{label}
			</label>
			<div className="relative">
				<input
					type={type}
					id={name}
					placeholder={placeholder}
					className={cn(
						"focus:shadow-outline w-full appearance-none rounded border bg-neutral-50 px-3 py-2 font-medium leading-tight placeholder-neutral-400 shadow focus:outline-none dark:bg-neutral-950 dark:text-neutral-50",
						{
							"border-red-500": errors[name],
							"pl-10": icon,
						},
					)}
					{...register(name)}
				/>
				{icon && (
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						{icon}
					</div>
				)}
			</div>
			{errors[name] && typeof errors[name].message === "string" && (
				<p className="text-sm italic text-red-500">
					{errors[name].message}
				</p>
			)}
		</div>
	);
}
