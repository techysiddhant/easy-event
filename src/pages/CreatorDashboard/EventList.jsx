import EventCard from "../../components/EventCard";

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
const EventList = () => {
	return (
		<div className="text-black px-4 py-5">
			<div className="space-y-6">
				<div>
					<h2 className="text-2xl py-2">Active Events</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-4 gap-y-4">
						{events.map((event) => (
							<EventCard
								key={event.id}
								{...event}
							/>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-2xl py-2">Completed Events</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-4 gap-y-4">
						{events.map((event) => (
							<EventCard
								key={event.id}
								{...event}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventList;
