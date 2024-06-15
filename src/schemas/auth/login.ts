import { z } from "zod";

const loginSchema = z.object({
	username: z.string().min(1, "Username is required"),
	password: z.string().min(1, "Password is required"),
});

export default loginSchema;

export type LoginFields = z.infer<typeof loginSchema>;
