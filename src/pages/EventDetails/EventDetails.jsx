import Button from "../../components/ui/Button";

const EventDetails = () => {
	return (
		<div className="flex flex-col gap-y-10 pb-10">
			<div className="w-full h-full overflow-hidden relative">
				<img
					src="https://images.unsplash.com/photo-1674574124345-02c525664b65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="event-poster"
					className="w-full h-[600px] lg:h-[400px] object-cover rounded"
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-[#131315]/50 flex flex-wrap justify-between gap-x-20 items-center px-10 md:px-14">
					<div className="w-full lg:w-[40%] flex flex-col gap-y-4">
						<h3 className="text-white font-[700] font-openSans text-4xl md:text-5xl capitalize">
							Dream world wide in jakatra
						</h3>
						<h4 className="text-white font-semibold text-2xl">New Delhi</h4>
						<p className="font-medium text-white text-xs hidden lg:block">
							DesignHub organized a 3D Modeling Workshop using Blender on 16th February
							at 5 PM. The workshop taught participants the magic of creating stunning
							3D models and animations using Blender. It was suitable for both
							beginners and experienced users. The event was followed by a
							blender-render competition, which added to the excitement.
						</p>
					</div>
					<div className="w-[40%]">
						<div className="bg-white w-[300px] mx-auto flex flex-col gap-y-4 p-4 rounded">
							<h5 className="text-black font-[700] text-2xl">Date & Time</h5>
							<p className="font-normal text-[#7e7e7e] text-lg font-openSans">
								16th February 2022, 5 PM
							</p>
							<h5>Venue: New Delhi</h5>
							<Button className="py-3">Buy Now</Button>
							<p className="text-[#7e7e7e] text-center text-sm font-semibold">
								No Refunds
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-x-20 justify-between px-10">
				<div className="w-full lg:w-[60%] space-y-4">
					<h5 className="font-bold text-3xl">Description</h5>
					<p className="font-normal text-lg text-[#7e7e7e]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse fugit
						possimus quia molestiae corrupti error voluptas deleniti, reiciendis nihil
						consequatur tempora impedit veritatis obcaecati, suscipit laudantium
						numquam omnis libero!
					</p>
					<p className="font-bold text-black text-2xl">Date & Time</p>
					<p className="text-[#7e7e7e] font-semibold text-lg font-openSans">
						Date : <span className="text-blue-600"> 15 Jan 2024</span>
					</p>
					<p className="text-[#7e7e7e] font-semibold text-lg font-openSans">
						Start-Time: <span className="text-blue-600">12:00 PM</span>
					</p>
					<p className="text-[#7e7e7e] font-semibold text-lg font-openSans">
						End-Time: <span className="text-blue-600">2:00 PM</span>
					</p>
					<h5 className="font-bold text-3xl">Organizer Contact</h5>
					<p className="text-[#7e7e7e] font-semibold text-lg font-openSans">
						contact us
					</p>
				</div>
				<div className="w-full lg:w-[40%] space-y-4">
					<h5 className="font-bold text-3xl">Event Location</h5>
					<p className="text-[#7e7e7e] font-semibold text-lg font-openSans">
						New Delhi
					</p>
					<h5 className="font-bold text-2xl">Event Type</h5>
					<p className="text-[#7e7e7e] font-semibold text-lg font-openSans">
						Online
					</p>
					<h5 className="font-bold text-2xl">Event Category</h5>
					<p className="text-[#7e7e7e] font-semibold text-lg font-openSans">Food</p>
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
