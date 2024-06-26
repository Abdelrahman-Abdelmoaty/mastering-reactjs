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
	return (
		<div className="flex items-center justify-between px-3 py-4">
			<a href="/">
				<h1 className="text-2xl font-black">Header</h1>
			</a>
			<div>
				<ul className="flex space-x-4">
					{NAV_ITEMS.map((item) => (
						<li key={item.name}>
							<a href={item.link}>{item.name}</a>
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
