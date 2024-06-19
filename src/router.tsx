import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/Register";
import ProtectedRoutes from "./components/Layouts/ProtectedRoutes";
import Layout from "./components/Layouts/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
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
			{
				path: "protected",
				element: <ProtectedRoutes />,
				children: [
					{
						path: "",
						element: <div>Dashboard</div>,
					},
				],
			},
		],
	},
]);
export default router;
