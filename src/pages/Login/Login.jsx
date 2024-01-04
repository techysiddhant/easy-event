import LoginComponent from "../../components/Login";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	return (
		<div className="flex w-full h-full">
			<div className="w-[60%]">
				<LoginComponent />
			</div>
			<div className="w-[40%] h-full relative ">
				{/* <div className="bg-[rgba(19,19,21,0.30)] h-full w-full border overflow-hidden"> */}
				<div className="">
					<img
						src="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						className="h-screen object-cover w-full "
					/>
				</div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center flex-col gap-y-4 bg-[rgba(19,19,21,0.30)] h-screen w-full">
					<h1 className="text-white">Hello Friend</h1>
					<p className="text-center text-white w-full">
						To keep connected with us provide us with your information{" "}
					</p>
					<Button
						className=""
						onClick={() => navigate("/signup")}
					>
						Sign Up
					</Button>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default Login;
