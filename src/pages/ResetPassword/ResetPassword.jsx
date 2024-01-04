import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
const ResetPassword = () => {
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState("");
	const urlParams = new URLSearchParams(window.location.search);
	const secret = urlParams.get("secret");
	const userId = urlParams.get("userId");
	const resetpassword = async (data) => {
		try {
			const res = await authService.updatePassword(
				userId,
				secret,
				data.password,
				data.passwordAgain
			);
			if (res) {
				console.log(res);
			}
		} catch (error) {
			setError(error);
			console.log(error);
		}
	};
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="w-[350px] m-auto">
				<h2 className="text-center py-5">Forgot Password</h2>
				{error && <p className="text-red-600 mt-8 text-center">{error}</p>}

				<form onSubmit={handleSubmit(resetpassword)}>
					<div className="space-y-4">
						<Input
							label="PASSWORD"
							type="password"
							placeholder="Enter your password"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("password", {
								required: true,
								minLength: 8,
							})}
						/>
						<Input
							label="CONFIRM PASSWORD"
							type="password"
							placeholder="Enter your password again"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("passwordAgain", {
								required: true,
								minLength: 8,
							})}
						/>
						<Button
							className="w-full rounded-md text-lg font-semibold"
							type="submit"
						>
							Update Password
						</Button>{" "}
					</div>
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
