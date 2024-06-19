import { createContext, useEffect, useState } from "react";
import { getSession } from "../../lib/session";
import Session from "../../types/session";

type AuthContextType = {
	session: Session | null;
};

export const AuthContext = createContext<AuthContextType>({
	session: null,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		async function loadSession() {
			const loadedSession = await getSession();
			setSession(loadedSession);
		}
		loadSession();
	}, []);

	return (
		<AuthContext.Provider value={{ session: session }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
