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
import { Mail, User, Lock } from "lucide-react";
import Button from "../../components/ui/Button";
import { cn } from "../../lib/utils";

// TODO: Validate Confirm Password
// TODO: Add password strength meter
// TODO: Add password visibility toggle
// TODO: Add loading state
// TODO: Add international phone number input

const REGISTER_FIELDS = [
	{
		name: "firstName",
		label: "First Name",
		placeholder: "Enter your first name",
		icon: <User className="size-5" />,
	},
	{
		name: "lastName",
		label: "Last Name",
		placeholder: "Enter your last name",
		icon: <User className="size-5" />,
	},
	{
		name: "email",
		label: "Email",
		placeholder: "Enter your email",
		icon: <Mail className="size-5" />,
	},
	{
		name: "username",
		label: "Username",
		placeholder: "Enter your username",
		icon: <User className="size-5" />,
	},
	{
		name: "password",
		label: "Password",
		placeholder: "••••••••",
		type: "password",
		icon: <Lock className="size-5" />,
	},
	{
		name: "confirmPassword",
		label: "Confirm Password",
		placeholder: "••••••••",
		type: "password",
		icon: <Lock className="size-5" />,
	},
];

export default function Register() {
	const methods = useForm<RegisterFields>({
		resolver: zodResolver(registerSchema),
	});

	const { mutate, isPending } = useMutation({
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
		<div className="mx-auto my-auto w-full max-w-xl rounded-lg bg-neutral-100 p-6 shadow dark:bg-neutral-900">
			<h2 className="mb-6 text-4xl font-extrabold italic">Register</h2>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					{REGISTER_FIELDS.map((field) => (
						<ValidatedInput key={field.name} {...field} />
					))}
					<InternationalPhoneNumberInput
						name="phoneNumber"
						label="Phone Number"
					/>
					<Button
						type="submit"
						disabled={isPending}
						className={cn({
							"bg-gray-400": isPending,
						})}
					>
						Submit
					</Button>
				</form>
			</FormProvider>
		</div>
	);
}
