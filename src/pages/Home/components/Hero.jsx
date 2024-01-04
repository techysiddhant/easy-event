import Filter from "./Filter";

const Hero = () => {
	return (
		<div className="relative">
			<div className="relative">
				<img
					src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="poster"
					className="w-full h-[400px] object-cover rounded"
				/>
				<h3 className="uppercase font-[700] text-3xl text-center absolute top-1/2 left-0 w-full text-white bg-gray-400/50">
					Made for those who do
				</h3>
			</div>
			<div className="absolute -bottom-10 w-full">
				<Filter />
			</div>
		</div>
	);
};

export default Hero;
