import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidatedInput from "../../components/Forms/ValidatedInput";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { setSession } from "../../lib/session";
import loginHandler from "../../server/auth/login";
import loginSchema, { type LoginFields } from "../../schemas/auth/login";
import { User, Lock } from "lucide-react";
import { cn } from "../../lib/utils";
import Button from "../../components/ui/Button";
import useAuth from "../../contexts/auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

// TODO: Add loading state
// TODO: Add password visibility toggle
// TODO: Add forgot password link
// TODO: Add login with username or email

const LOGIN_FIELDS = [
	{
		name: "username",
		label: "Username",
		placeholder: "Enter your username",
		icon: <User />,
	},
	{
		name: "password",
		label: "Password",
		placeholder: "Enter your password",
		type: "password",
		icon: <Lock />,
	},
];

export default function Login() {
	const methods = useForm<LoginFields>({
		resolver: zodResolver(loginSchema),
	});

	const { setSession: setSessionContext } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/";

	const { mutate, isPending } = useMutation({
		mutationKey: ["login"],
		mutationFn: loginHandler,

		onSuccess: async (data) => {
			await setSession(data);
			setSessionContext(data);
			navigate(from);
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
		<div className="mx-auto my-auto w-full max-w-xl rounded-lg bg-neutral-100 p-6 shadow dark:bg-neutral-900">
			<h2 className="mb-6 text-4xl font-extrabold italic">Login</h2>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className="">
					{LOGIN_FIELDS.map((field) => (
						<ValidatedInput key={field.name} {...field} />
					))}
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
