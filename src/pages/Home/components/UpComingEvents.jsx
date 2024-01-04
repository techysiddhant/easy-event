import EventCard from "../../../components/EventCard";
import Button from "../../../components/ui/Button";
import Select from "../../../components/ui/Select";
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
const UpComingEvents = () => {
	return (
		<div className="mt-14 px-10 h-full">
			<div className="flex flex-col gap-y-6 py-5">
				<div className="flex justify-between w-full items-center">
					<h3 className="text-3xl font-[700] font-openSans text-black">
						Upcoming <span className="text-blue-600">Events</span>{" "}
					</h3>

					<div className="flex gap-x-4">
						<Select
							// label="Category"
							name="category"
							// labelClassName="text-white"
							className="w-fit"
							options={["Event Type", "Food", "Drink"]}
						/>
						<Select
							// label="Location"
							name="category"
							// labelClassName="text-white"
							options={["Any Category", "Food", "Drink"]}
							className="w-fit"
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
					{events.map((event) => (
						<EventCard
							key={event.id}
							{...event}
						/>
					))}
				</div>
			</div>

			<div className="flex justify-center items-center py-10">
				<Button>Load More..</Button>
			</div>
		</div>
	);
};

export default UpComingEvents;
