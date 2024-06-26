import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidatedInput from "../../components/Forms/ValidatedInput";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { setSession } from "../../lib/session";
import loginHandler from "../../server/auth/login";
import loginSchema, { type LoginFields } from "../../schemas/auth/login";
import { User, Lock } from "lucide-react";

// TODO: Add loading state
// TODO: Add password visibility toggle
// TODO: Add forgot password link
// TODO: Add login with username or email

const LOGIN_FIELDS = [
	{
		name: "username",
		label: "Username",
		placeholder: "Enter your username",
		icon: <User className="size-5" />,
	},
	{
		name: "password",
		label: "Password",
		placeholder: "Enter your password",
		type: "password",
		icon: <Lock className="size-5" />,
	},
];

export default function Login() {
	const methods = useForm<LoginFields>({
		resolver: zodResolver(loginSchema),
	});

	const { mutate } = useMutation({
		mutationKey: ["login"],
		mutationFn: loginHandler,
		onSuccess: (data) => {
			setSession(data);
			toast.success("Login successful");
		},
		onError: (error: string) => {
			toast.error(error);
		},
	});

	const onSubmit = (data: LoginFields) => {
		mutate(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				{LOGIN_FIELDS.map((field) => (
					<ValidatedInput key={field.name} {...field} />
				))}
				<button type="submit">Submit</button>
			</form>
		</FormProvider>
	);
}
