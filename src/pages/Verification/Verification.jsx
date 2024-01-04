import { useEffect } from "react";
import authService from "../../appwrite/auth";
const Verification = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const secret = urlParams.get("secret");
	const userId = urlParams.get("userId");

	useEffect(() => {
		if (secret && userId) {
			(async () => {
				console.log("Hiting");
				try {
					const response = await authService.updateVerification(userId, secret);
					console.log(response);
				} catch (error) {
					console.log(error);
				}
			})();
		}
	}, [secret, userId]);
	return <div>Verification</div>;
};

export default Verification;
