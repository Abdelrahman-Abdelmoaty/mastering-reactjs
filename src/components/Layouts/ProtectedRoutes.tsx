import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../contexts/auth/useAuth";

export default function ProtectedRoutes() {
	const { session } = useAuth();

	if (!session) {
		return (
			<Navigate
				to="/auth/login"
				state={{ from: window.location.pathname }}
			/>
		);
	}

	return <Outlet />;
}
