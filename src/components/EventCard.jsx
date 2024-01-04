/* eslint-disable react/prop-types */
const EventCard = ({ title, date, time, type, isFree, image }) => {
	return (
		<div className="flex flex-col gap-y-4 p-4 rounded-lg bg-white text-black h-full  event_card">
			<div className="relative">
				<img
					src={image}
					alt=""
					className="rounded-lg"
				/>
				<div className="bg-white px-4 py-1 text-sm font-semibold uppercase rounded absolute top-2 left-2 text-blue-600 ">
					{isFree ? "FREE" : "PRICE"}
				</div>
			</div>
			<div className="flex justify-between flex-col gap-y-2">
				<h4 className="font-openSans font-semibold text-md hover:underline hover:text-blue-600 transition-all duration-300 ease-in-out hover:cursor-pointer">
					{title}
				</h4>
				<p className="text-blue-600 font-medium py-1">
					<span>{date}</span>
					{","}
					<span>{time}</span>
				</p>
				<p className="uppercase text-[#7e7e7e] font-openSans text-sm font-semibold">
					{type} Event
				</p>
			</div>
		</div>
	);
};

export default EventCard;
