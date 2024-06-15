import Cookies from "cookies-js";
import { decrypt, encrypt } from "./jose";

export const getSession = async () => {
	const session = Cookies.get("session");
	if (!session) {
		return null;
	}
	return await decrypt(session);
};

export const setSession = async <T>(session: T) => {
	const token = await encrypt(session);
	Cookies.set("session", token);
};

export const clearSession = () => {
	Cookies.expire("session");
};

export const isLoggedIn = async () => {
	const session = await getSession();
	return !!session;
};
