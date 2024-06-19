import { JWTPayload, jwtVerify, SignJWT } from "jose";

const key = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);

export async function encrypt(payload: unknown) {
	return await new SignJWT(payload as JWTPayload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		// .setExpirationTime("3600 sec from now")
		.sign(key);
}

export async function decrypt(input: string) {
	const { payload } = await jwtVerify(input, key, {
		algorithms: ["HS256"],
	});
	return payload;
}
