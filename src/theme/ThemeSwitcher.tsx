import { useEffect } from "react";
import { useTheme } from "./useTheme";

export default function ThemeSwitcher() {
	const [theme, setTheme] = useTheme();

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<button onClick={handleThemeSwitch}>
			Switch to {theme === "light" ? "Dark" : "Light"} Mode
		</button>
	);
}
