import axios from "axios";
import { clearSession, getToken } from "./session";

const token = await getToken();

const axiosProtected = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer " + token,
	},
	withCredentials: true,
	params: {},
});

axiosProtected.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

axiosProtected.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			clearSession();
			window.location.href = "/auth/login";
		}

		return Promise.reject(error);
	},
);

export default axiosProtected;
