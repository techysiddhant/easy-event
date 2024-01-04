import Button from "../../../components/ui/Button";
import Select from "../../../components/ui/Select";

const Filter = () => {
	return (
		<div className="">
			<div className="bg-indigo-700 w-[90%] mx-auto rounded-lg   ">
				<form action="">
					<div className="flex justify-center items-center   gap-x-4 flex-wrap lg:flex-nowrap py-4 px-20">
						<Select
							label="Category"
							name="category"
							labelClassName="text-white"
							options={["All", "Food", "Drink"]}
						/>
						<Select
							label="Location"
							name="category"
							labelClassName="text-white"
							options={["All", "Food", "Drink"]}
						/>
						<Select
							label="Select Date"
							name="category"
							labelClassName="text-white"
							options={["All", "Food", "Drink"]}
						/>

						<Button className="px-4 mt-5">Search</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Filter;
