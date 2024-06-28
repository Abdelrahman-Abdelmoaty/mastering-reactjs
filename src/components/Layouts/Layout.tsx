import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<div className="flex flex-1 flex-col py-6">
				<Outlet />
			</div>
		</div>
	);
}
