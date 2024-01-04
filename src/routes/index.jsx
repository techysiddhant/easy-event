import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Verification from "../pages/Verification/Verification";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import CreatorRegistration from "../pages/CreatorRegistration/CreatorRegistration";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import EventDetails from "../pages/EventDetails/EventDetails";
import Profile from "../pages/Profile/Profile";
import DashboardLayout from "../Layout/DashboardLayout";
import CreatorDashboard from "../pages/CreatorDashboard/CreatorDashboard";
import EventList from "../pages/CreatorDashboard/EventList";

// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainLayout></MainLayout>,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "/aboutus",
// 				element: <AboutUs />,
// 			},
// 		],
// 	},
// ]);

const ALLRoutes = () => {
	return (
		<Routes>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/signup"
				element={<SignUp />}
			/>
			<Route
				path="/verification"
				element={<Verification />}
			/>
			<Route
				path="/forgot-password"
				element={<ForgotPassword />}
			/>
			<Route
				path="/reset-password"
				element={<ResetPassword />}
			/>
			<Route
				path="/creator-login"
				element={<CreatorRegistration />}
			/>
			<Route
				path="/success"
				element={<h1>Payment Done</h1>}
			/>
			<Route
				path="/failure"
				element={<h1>Failed</h1>}
			/>
			<Route element={<MainLayout></MainLayout>}>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/profile"
					element={<Profile />}
				/>
				<Route
					path="/create-event"
					element={<CreateEvent />}
				/>
				<Route
					path="/event/:id"
					element={<EventDetails />}
				/>
			</Route>
			<Route element={<DashboardLayout />}>
				<Route
					path="/dashboard"
					element={<CreatorDashboard />}
				/>
				<Route
					path="/dashboard/events"
					element={<EventList />}
				/>
			</Route>
		</Routes>
	);
};

export default ALLRoutes;
