import Button from "./ui/Button";
import Input from "./ui/Input";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUpComponent = () => {
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const signUp = async (data) => {
		setError("");
		console.log("DATA :", data);
		try {
			// const session = await authService.createUserAccount(data);

			const userData = await authService.createUserAccount(data);
			const verify = await authService.createVerifyUserAccount(
				"http://localhost:5173/verification"
			);
			if (verify) {
				console.log(verify);
				alert("Verification Send");
			}
			if (userData) {
				console.log(userData);
				const userData2 = await authService.getCurrentUser();
				if (userData2) navigate("/");
			}
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<div className="bg-[#F8F8FA] h-screen w-full  lg:px-10 2xl:px-20 ">
			<h1 className="text-center font-[700] text-xl text-black pt-10 pb-10">
				Easy <span className="text-blue-600">Events</span>{" "}
			</h1>
			<h2 className="text-center font-[700] text-2xl ">Register to Easy Events</h2>
			{error && <p className="text-red-600 mt-8 text-center">{error}</p>}
			<div className="max-w-[350px] 2xl:max-w-[450px] w-full  mx-auto my-10">
				<form onSubmit={handleSubmit(signUp)}>
					<div className="space-y-8">
						<Input
							label="Your Name"
							type="text"
							placeholder="Enter your name"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("name", {
								required: true,
								minLength: 3,
							})}
						/>
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
								minLength: 8,
							})}
						/>

						<Button
							className="w-full rounded-md text-lg font-semibold"
							type="submit"
						>
							Sign Up
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUpComponent;
