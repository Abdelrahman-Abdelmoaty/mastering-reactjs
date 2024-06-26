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
			<label
				htmlFor={name}
				className="mb-2 block text-sm font-bold text-gray-700"
			>
				{label}
			</label>
			<div className="relative">
				<input
					type={type}
					id={name}
					placeholder={placeholder}
					className={cn(
						"focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
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
				{errors[name] && typeof errors[name].message === "string" && (
					<p className="text-xs italic text-red-500">
						{errors[name].message}
					</p>
				)}
			</div>
		</div>
	);
}
