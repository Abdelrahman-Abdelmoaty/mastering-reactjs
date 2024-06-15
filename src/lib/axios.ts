import axios from "axios";

const axiosInstance = axios.create({
	// The base URL for the request
	baseURL: "https://dummyjson.com/",
	// Specifies the number of milliseconds before the request times out
	timeout: 5000,
	headers: {
		// Specifies the content type of the request
		"Content-Type": "application/json",
		// Adds an authorization header to the request
		// Authorization: "Bearer token123",
	},
	params: {
		// Adds query parameters to the request
		// apiKey: "123456",
	},
	// Indicates whether or not cross-site Access-Control requests should be made using credentials
	// withCredentials: true,
	// The name of the cookie to use as a value for xsrf token
	// xsrfCookieName: "XSRF-TOKEN",
});

axiosInstance.interceptors.request.use(
	(config) => {
		// Do something before request is sent
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(response) => {
		// Do something with response data
		return response;
	},
	(error) => {
		// Do something with response error
		return Promise.reject(error);
	},
);

export default axiosInstance;
