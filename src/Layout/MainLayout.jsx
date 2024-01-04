import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
	return (
		<div className="bg-[#f8f8fa] h-full">
			<Navbar />
			<main className="container mx-auto px-4">
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
