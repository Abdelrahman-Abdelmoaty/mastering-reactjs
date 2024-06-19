import Cookies from "cookies-js";
import { decrypt, encrypt } from "./jose";
import Session from "../types/session";

export const getSession = async () => {
	const session = Cookies.get("session");
	if (!session) {
		return null;
	}

	const { payload } = await decrypt(session);
	return payload as Session;
};

export const setSession = async <T>(session: T) => {
	const token = await encrypt(session);
	Cookies.set("session", token);
};

export const clearSession = () => {
	Cookies.expire("session");
};

export const isLoggedIn = async () => {
	const session = Cookies.get("session");
	return !!session;
};

export const getToken = async () => {
	const session = await getSession();
	if (!session) {
		return null;
	}
	return session.token;
};
