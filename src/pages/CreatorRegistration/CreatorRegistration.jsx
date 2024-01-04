import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
const CreatorRegistration = () => {
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const registerCreator = async (data) => {
		try {
			const response = await authService.createCreatorAccount(data);
			if (response) {
				console.log(response);
			}
		} catch (error) {
			setError(error);
			console.log(error);
			alert(error);
		}
	};
	return (
		<div className="h-screen flex items-center justify-center">
			<div className="max-w-[350px] m-auto">
				<h2 className="text-3xl text-center py-5">Creator Registration</h2>
				<form onSubmit={handleSubmit(registerCreator)}>
					<div className="space-y-4">
						<Input
							label="Your Name *"
							type="text"
							placeholder="Enter your name"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("name", {
								required: true,
								minLength: 3,
							})}
						/>
						<Input
							label="Your Company Name"
							type="text"
							placeholder="Enter company name"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("company", {
								required: true,
								minLength: 3,
							})}
						/>
						<Input
							label="YOUR EMAIL *"
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
							label="Your Password *"
							type="password"
							placeholder="Enter your password"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("password", {
								required: true,
								minLength: 3,
							})}
						/>
						<Button
							type="submit"
							className="w-full rounded"
						>
							Register
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreatorRegistration;
