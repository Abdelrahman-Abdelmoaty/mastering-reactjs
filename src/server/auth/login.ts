import axios from "axios";
import axiosInstance from "../../lib/axios";
import { LoginFields } from "../../schemas/auth/login";

export default async function loginHandler(loginFields: LoginFields) {
	try {
		const response = await axiosInstance.post("/auth/login", loginFields);
		if (response.status === 200) {
			return response.data;
		} else {
			throw response.data.message || "An unknown error occurred";
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw (
				error.response?.data.message || "An error occurred during login"
			);
		} else if (error instanceof Error) {
			throw error.message;
		}

		throw "An unknown error occurred";
	}
}
