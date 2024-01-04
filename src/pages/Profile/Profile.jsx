import OrderCard from "./OrderCard";

const events = [
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1601601392622-5d18104a78fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title:
			"BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow",
		date: "Saturdat, March 18, ",
		time: "9.30PM",
		type: "online",
		isFree: true,
	},
	{
		id: 2,
		image:
			"https://images.unsplash.com/photo-1601601392622-5d18104a78fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title:
			"BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow",
		date: "Saturdat, March 18, ",
		time: "9.30PM",
		type: "online",
		isFree: true,
	},
	{
		id: 3,
		image:
			"https://images.unsplash.com/photo-1601601392622-5d18104a78fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title:
			"BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow",
		date: "Saturdat, March 18, ",
		time: "9.30PM",
		type: "online",
		isFree: true,
	},
	{
		id: 4,
		image:
			"https://images.unsplash.com/photo-1601601392622-5d18104a78fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title:
			"BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow",
		date: "Saturdat, March 18, ",
		time: "9.30PM",
		type: "online",
		isFree: true,
	},
	{
		id: 5,
		image:
			"https://images.unsplash.com/photo-1601601392622-5d18104a78fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title:
			"BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow",
		date: "Saturdat, March 18, ",
		time: "9.30PM",
		type: "online",
		isFree: true,
	},
	{
		id: 6,
		image:
			"https://images.unsplash.com/photo-1601601392622-5d18104a78fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title:
			"BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow",
		date: "Saturdat, March 18, ",
		time: "9.30PM",
		type: "online",
		isFree: true,
	},
];
const Profile = () => {
	return (
		<div>
			<div className="max-w-[500px] mx-auto space-y-4">
				<h2 className="text-2xl font-bold">Profile Details</h2>
				<div className="flex gap-x-10">
					<div>
						<img
							src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt="profile"
							className="rounded-full w-[150px] h-[150px] object-cover"
						/>
					</div>
					<div className="space-y-2">
						<h3 className="font-medium text-lg">Name</h3>
						<p className="font-medium text-lg text-blue-600">siddhant</p>
						<h3 className="font-medium text-lg">Email</h3>
						<p className="font-medium text-lg text-blue-600">sid@test.com</p>
						{/* <p>Total Event</p> */}
					</div>
				</div>
			</div>
			<div className="lg:px-10 py-4">
				<h2 className="text-[#7e7e7e] font-semibold text-xl">Order History</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
					{events.map((event) => (
						<OrderCard
							key={event.id}
							{...event}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Profile;
