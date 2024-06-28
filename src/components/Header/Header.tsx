import { Link } from "react-router-dom";
import useAuth from "../../contexts/auth/useAuth";
import ThemeSwitcher from "../../theme/ThemeSwitcher";

const NAV_ITEMS = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Login",
		link: "/auth/login",
	},
	{
		name: "Register",
		link: "/auth/register",
	},
	{
		name: "Posts",
		link: "/posts",
	},
	{
		name: "Protected",
		link: "/protected",
	},
];

export default function Header() {
	const { session } = useAuth();

	return (
		<div className="flex items-center justify-between bg-neutral-100 px-6 py-4 shadow dark:bg-neutral-900">
			<a href="/">
				<h1 className="text-2xl font-black">Header</h1>
			</a>
			{session ? (
				<div>User: {session.username}</div>
			) : (
				<div>No session</div>
			)}
			<div>
				<ul className="flex space-x-4">
					{NAV_ITEMS.map((item) => (
						<li key={item.name}>
							<Link to={item.link}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<ThemeSwitcher />
			</div>
		</div>
	);
}
