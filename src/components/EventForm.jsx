import Button from "./ui/Button";
import Input from "./ui/Input";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePickerComponent from "./ui/DatePicker";
import TimeKeeper from "react-timekeeper";
import Select from "./ui/Select";

const EventFormComponent = () => {
	const { register, handleSubmit, control, watch } = useForm();
	const [error, setError] = useState("");
	const [img, setImg] = useState("");
	const navigate = useNavigate();
	const [showStartTime, setShowStartTime] = useState(false);
	const [showEndTime, setShowEndTime] = useState(false);
	const startTime = watch("startTime");
	const endTime = watch("endTime");
	const isFree = watch("isFree");
	function handleChange({ image }) {
		if (image.length > 0) {
			setImg(URL.createObjectURL(image[0]));
		}
	}
	React.useEffect(() => {
		const subscription = watch((value) => handleChange(value));
		return () => subscription.unsubscribe();
	}, [watch]);
	const createEvent = async (data) => {
		// console.log(data);
	};
	return (
		<div>
			<div className="container mx-auto max-w-[900px]">
				<h2 className="text-center text-3xl text-blue-600 font-semibold font-openSans pb-4">
					Create a Event
				</h2>
				{error && <p className="text-red-600 mt-8 text-center">{error}</p>}
				<form onSubmit={handleSubmit(createEvent)}>
					<div className=" grid grid-cols-2 justify-between gap-5">
						<Input
							label="Title"
							type="text"
							placeholder="Enter event title"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("title", {
								required: true,
								minLength: 1,
							})}
						/>
						<Input
							label="Venue"
							type="text"
							placeholder="Enter event venue"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("venue", {
								minLength: 1,
							})}
						/>
						<Input
							label="Description"
							type="textarea"
							placeholder="Enter event description ..."
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("description", {
								minLength: 1,
							})}
						/>
						<Input
							label="Full Address"
							type="textarea"
							placeholder="Enter full address"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("address", {
								minLength: 1,
							})}
						/>
						<Controller
							name="startDate"
							control={control}
							render={({ field: { onChange, onBlur, value, ref } }) => (
								<DatePickerComponent
									label="Start Date"
									placeholderText="Select start date"
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									ref={ref}
									dateFormat={"dd/MM/yyyy"}
									isClearable={true}
									minDate={new Date()}
								/>
							)}
						/>
						<Controller
							name="endDate"
							control={control}
							render={({ field: { onChange, onBlur, value, ref } }) => (
								<DatePickerComponent
									label="End Date"
									placeholderText="Select end date"
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									ref={ref}
									dateFormat={"dd/MM/yyyy"}
									isClearable={true}
									minDate={new Date()}
									className="w-[500px]"
								/>
							)}
						/>
						<div>
							{showStartTime && (
								<Controller
									name="startTime"
									control={control}
									render={({ field: { onChange, value } }) => (
										<TimeKeeper
											time={value}
											onChange={(newTime) => onChange(newTime.formatted12)}
											switchToMinuteOnHourSelect
											onDoneClick={() => setShowStartTime(false)}
										/>
									)}
								/>
							)}

							{!showStartTime && (
								<Button
									className="w-full bg-white  border"
									onClick={() => setShowStartTime(true)}
								>
									<span className="text-black"> Select Start Time </span>
									<span className="text-black">{startTime}</span>
								</Button>
							)}
						</div>
						<div>
							{showEndTime && (
								<Controller
									name="endTime"
									control={control}
									render={({ field: { onChange, value } }) => (
										<TimeKeeper
											time={value}
											onChange={(newTime) => onChange(newTime.formatted12)}
											switchToMinuteOnHourSelect
											onDoneClick={() => setShowEndTime(false)}
										/>
									)}
								/>
							)}

							{!showEndTime && (
								<Button
									onClick={() => setShowEndTime(true)}
									className="w-full bg-white  border"
								>
									<span className="text-black">Select End Time</span>
									<span className="text-black">{endTime}</span>
								</Button>
							)}
						</div>
						<Input
							label="Location (City)"
							type="text"
							placeholder="Enter location"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("location", {
								minLength: 1,
							})}
						/>

						<Select
							label={"Type"}
							options={["online", "offline"]}
							{...register("type", { required: true })}
						/>
						<Select
							label={"Category"}
							options={["Music", "Food"]}
							{...register("category", { required: true })}
						/>
						<div className="flex gap-x-4">
							{/* <Input
								label="is Free!"
								type="checkbox"
								placeholder="Enter amount"
								className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
								{...register("isFree", {})}
							/> */}
							<div className="flex flex-col ">
								<label
									htmlFor="isFree"
									className=" mb-1 pl-1 w-[50px] "
								>
									is Free
								</label>
								<input
									type="checkbox"
									name="isFree"
									id="isFree"
									className="w-[40px] h-[44px]"
									{...register("isFree", {})}
								/>
							</div>
							{
								<Input
									label="Enter Ticket Price"
									type="number"
									disabled={isFree}
									placeholder={`${isFree ? "Event is Free" : "Enter ticket price"}`}
									className={`text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2 ${
										isFree && "opacity-50"
									}`}
									{...register("price", {
										minLength: 1,
									})}
								/>
							}
						</div>
						<Input
							label="Organiser Details"
							type="textarea"
							placeholder="Enter Organiser Details ..."
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("organiserDetails", {
								minLength: 1,
							})}
						/>
						<Input
							label="Organiser Email"
							type="email"
							placeholder="Enter email"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("organiserEmail", {
								minLength: 1,
							})}
						/>
						<Input
							label="Organiser Phone No."
							type="phone"
							placeholder="Enter Phone number"
							className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
							{...register("organiserPhone", {
								minLength: 1,
							})}
						/>
						<Input
							label="Featured Image :"
							type="file"
							className=""
							accept="image/png, image/jpg, image/jpeg, image/gif"
							{...register("image", { required: true })}
						/>
						{img ? (
							<img
								src={img}
								alt="preview"
							/>
						) : null}
						<div>
							<Input
								label="Facebook Link"
								type="phone"
								placeholder="Enter link"
								className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
								{...register("facebookLink", {
									minLength: 1,
								})}
							/>
							<Input
								label="Instagram Link"
								type="phone"
								placeholder="Enter link"
								className="text-[#687C94] rounded-md text-lg placeholder:text-base placeholder:font-medium px-4 py-2"
								{...register("instagramLink", {
									minLength: 1,
								})}
							/>
						</div>
						{/* <div>
							<img
								src={img}
								alt=""
								className="object-cover  h-full aspect-video w-full"
							/>
						</div> */}
					</div>
					<Button
						type="submit"
						className="w-full my-4 "
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default EventFormComponent;
