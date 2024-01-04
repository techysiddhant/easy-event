import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";
const DashboardLayout = () => {
	return (
		<div className="flex w-full">
			<div className="max-w-56 w-full h-screen  bg-white border-r border-gray-200 flex flex-col text-3xl gap-y-4">
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/dashboard/events">Events</Link>
				<Link to="/create-event">Create Events</Link>
			</div>
			<div className="-pl-56 ">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
