import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="container mx-auto px-10 py-6">
			<nav className="flex justify-between items-center">
				<h1 className="text-black font-openSans text-3xl font-[700] tracking-wide">
					Easy <span className="text-blue-600">Events</span>
				</h1>
				<div className="space-x-8">
					<Link
						to="/login"
						className="text-[#131315] text-lg font-[400]"
					>
						Login
					</Link>
					<Link
						to="/login"
						className="text-[#131315] text-lg font-[400]"
					>
						Explore
					</Link>
					<Link
						to="/signup"
						className="bg-blue-600 px-6 py-2 text-white rounded"
					>
						Signup
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
