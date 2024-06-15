import axios from "axios";
import axiosInstance from "../../lib/axios";
import { RegisterFields } from "../../schemas/auth/register";

export default async function registerHandler(registerFields: RegisterFields) {
	try {
		const response = await axiosInstance.post(
			"/auth/register",
			registerFields,
		);
		if (response.status === 200) {
			return response.data;
		} else {
			throw response.data.message || "An unknown error occurred";
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw (
				error.response?.data.message ||
				"An error occurred during registration"
			);
		} else if (error instanceof Error) {
			throw error.message;
		}

		throw "An unknown error occurred";
	}
}
