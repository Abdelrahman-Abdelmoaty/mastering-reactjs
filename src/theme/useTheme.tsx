import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getSystemTheme = (): Theme => {
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		return "dark";
	}
	return "light";
};

const getInitialTheme = (): Theme => {
	const savedTheme = localStorage.getItem("theme") as "light" | "dark";

	return savedTheme || getSystemTheme();
};

const saveTheme = (theme: Theme) => {
	localStorage.setItem("theme", theme);
};

export const useTheme = () => {
	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		saveTheme(theme);
	}, [theme]);

	return [theme, setTheme] as const;
};
