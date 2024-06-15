import { useFormContext } from "react-hook-form";

type ValidatedInputProps = {
	name: string;
	label: string;
	type?: React.HTMLInputTypeAttribute;
	placeholder?: string;
};

export default function ValidatedInput({
	name,
	label,
	type = "text",
	placeholder,
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
			<input
				type={type}
				id={name}
				placeholder={placeholder}
				className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${
					errors[name] ? "border-red-500" : ""
				}`}
				{...register(name)}
			/>
			{errors[name] && typeof errors[name].message === "string" && (
				<p className="text-xs italic text-red-500">
					{errors[name].message}
				</p>
			)}
		</div>
	);
}
