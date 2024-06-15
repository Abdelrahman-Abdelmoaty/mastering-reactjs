import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

const registerSchema = z
	.object({
		firstName: z.string().min(1, "First name is required"),
		lastName: z.string().min(1, "Last name is required"),
		email: z.string().min(1, "Email is required").email("Invalid email"),
		username: z
			.string()
			.min(1, "Username is required")
			.regex(
				/^[\w]{1,15}$/,
				"Username must be at most 15 characters and can only contain letters, numbers, and underscores.",
			),
		password: z
			.string()
			.min(1, "Password is required")
			.regex(
				/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
				"Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a digit, and a special character.",
			),
		confirmPassword: z.string().min(1, "Confirm password is required"),
		phoneNumber: z.string().min(1, "Phone number is required"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	})
	.refine((data) => isValidPhoneNumber(data.phoneNumber), {
		message: "Invalid phone number",
		path: ["phoneNumber"],
	});

export default registerSchema;

export type RegisterFields = z.infer<typeof registerSchema>;
