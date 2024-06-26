import axios from "axios";
import axiosInstance from "../../lib/axios";

export default async function getPosts() {
	try {
		const response = await axiosInstance.get("/posts");
		return response.data.data;
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
