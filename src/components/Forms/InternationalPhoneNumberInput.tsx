import { Controller, useFormContext } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function InternationalPhoneNumberInput({
	name,
	label,
}: {
	name: string;
	label: string;
}) {
	const {
		control,
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

			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/* @ts-ignore */}

			{/* <PhoneInputWithCountrySelect {...register(name)} /> */}

			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<PhoneInputWithCountrySelect
						className="w-full rounded border border-gray-300 p-2"
						{...field}
					/>
				)}
			/>

			{errors[name] && typeof errors[name].message === "string" && (
				<p className="text-xs italic text-red-500">
					{errors[name].message}
				</p>
			)}
		</div>
	);
}
