import Button from "./ui/Button";
import Input from "./ui/Input";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ErrorMessage } from "@hookform/error-message";
const LoginComponent = () => {
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const login = async (data) => {
		setError("");
		// console.log("DATA :", data);
		try {
			const session = await authService.loginUserAccount(data);
			if (session) {
				// console.log(session);
				const userData = await authService.getCurrentUser();
				if (userData) {
					// console.log(userData);
					navigate("/");
				}
			}
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<div className="bg-[#F8F8FA] h-screen w-full  lg:px-10 2xl:px-20 ">
			<h1 className="text-center font-[700] text-xl text-black pt-20 pb-10">
				Easy <span className="text-blue-600">Events</span>{" "}
			</h1>
			<h2 className="text-center font-[700] text-2xl pb-10">
				Login to Easy Events
			</h2>
			{error && <p className="text-red-600 mt-8 text-center">{error}</p>}
			<div className="max-w-[350px] 2xl:max-w-[450px] w-full  mx-auto my-10">
				<form onSubmit={handleSubmit(login)}>
					<div className="space-y-10">
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
						<Input
							label="PASSWORD"
							type="password"
							placeholder="Enter your password"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("password", {
								required: true,
								minLength: 6,
							})}
						/>
						<Button
							className="w-full rounded-md text-lg font-semibold"
							type="submit"
						>
							Login
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginComponent;
