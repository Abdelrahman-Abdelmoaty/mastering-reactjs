import { useEffect } from "react";

function Root() {
	useEffect(() => {
		// This is a placeholder for any global initialization code you may need
		console.log("Root component mounted");

		return () => {
			console.log("Root component unmounted");
		};
	}, []);

	return null;
}

export default Root;
