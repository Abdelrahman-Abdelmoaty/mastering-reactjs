import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "auth",
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);
export default router;
