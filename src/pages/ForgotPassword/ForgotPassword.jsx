import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";

const ForgotPassword = () => {
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState("");
	const forgotPassword = async (data) => {
		try {
			const response = await authService.initiateForgotPassword(
				data.email,
				"http://localhost:5173/reset-password"
			);
			if (response) {
				console.log(response);
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

				<form onSubmit={handleSubmit(forgotPassword)}>
					<div className="space-y-4">
						<Input
							label="YOUR EMAIL"
							type="email"
							placeholder="Enter your email"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("email", {
								required: true,
								validate: {
									matchPatern: (value) =>
										/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
										"Email address must be a valid address",
								},
							})}
						/>
						<Button
							className="w-full rounded-md text-lg font-semibold"
							type="submit"
						>
							Sign Up
						</Button>{" "}
					</div>
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword;
