import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidatedInput from "../../components/Forms/ValidatedInput";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { setSession } from "../../lib/session";
import registerSchema, {
	type RegisterFields,
} from "../../schemas/auth/register";
import registerHandler from "../../server/auth/register";
import InternationalPhoneNumberInput from "../../components/Forms/InternationalPhoneNumberInput";

// TODO: Validate Confirm Password
// TODO: Add password strength meter
// TODO: Add password visibility toggle
// TODO: Add loading state
// TODO: Add international phone number input

export default function Register() {
	const methods = useForm<RegisterFields>({
		resolver: zodResolver(registerSchema),
	});

	const { mutate } = useMutation({
		mutationKey: ["register"],
		mutationFn: registerHandler,
		onSuccess: (data) => {
			setSession(data);
			toast.success("Register successful");
		},
		onError: (error: string) => {
			toast.error(error);
		},
	});

	const onSubmit = (data: RegisterFields) => {
		console.log(data);

		mutate(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<ValidatedInput
					name="firstName"
					label="First Name"
					placeholder="Enter your first name"
				/>
				<ValidatedInput
					name="lastName"
					label="Last Name"
					placeholder="Enter your last name"
				/>
				<ValidatedInput
					name="email"
					label="Email"
					placeholder="Enter your email"
				/>
				<ValidatedInput
					name="username"
					label="Username"
					placeholder="Enter your username"
				/>
				<ValidatedInput
					name="password"
					label="Password"
					type="password"
					placeholder="••••••••"
				/>
				<ValidatedInput
					name="confirmPassword"
					label="Confirm Password"
					type="password"
					placeholder="••••••••"
				/>
				<InternationalPhoneNumberInput
					name="phoneNumber"
					label="Phone Number"
				/>

				<button type="submit">Submit</button>
			</form>
		</FormProvider>
	);
}
