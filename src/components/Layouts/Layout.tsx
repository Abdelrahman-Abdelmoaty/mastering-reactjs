import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
}
