/* eslint-disable react/prop-types */
import React, { useId } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = React.forwardRef(function DatePickerComponent(
	{
		label,
		onChange,
		value,
		onBlur,

		className = "",
		width = "",
		...props
	},
	ref
) {
	const id = useId();
	return (
		<div className={`  flex flex-col`}>
			{label && (
				<label
					className="block mb-1 pl-1"
					htmlFor={id}
				>
					{label}
				</label>
			)}
			<DatePicker
				// placeholderText="Select date"
				selected={value}
				onChange={onChange}
				onBlur={onBlur}
				// isClearable={isClearable}
				ref={ref}
				{...props}
				// showTimeSelect
				className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
			/>
		</div>
	);
});

export default DatePickerComponent;
