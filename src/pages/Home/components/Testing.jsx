import axios from "axios";
import { useEffect } from "react";
import Button from "../../../components/ui/Button";
import authService from "../../../appwrite/auth";

const Testing = () => {
	// useEffect(() => {
	// 	const key = "rzp_test_yxAUCWH7ow1ptz";
	// 	const order = {
	// 		success: true,
	// 		order: {
	// 			id: "order_NHLrcNyy9tQmQp",
	// 			entity: "order",
	// 			amount: 1000,
	// 			amount_paid: 0,
	// 			amount_due: 1000,
	// 			currency: "INR",
	// 			receipt: null,
	// 			offer_id: null,
	// 			status: "created",
	// 			attempts: 0,
	// 			notes: [],
	// 			created_at: 1703676171,
	// 		},
	// 	};
	// 	const options = {
	// 		key,
	// 		amount: Number(order.amount / 100),
	// 		currency: "INR",
	// 		name: "Sinmplyjs",
	// 		description: "Razorpay tutorial",
	// 		image: "https://avatars.githubusercontent.com/u/96648429?s=96&v=4",
	// 		order_id: order.id,
	// 		callback_url: "https://658b293950d2f105f49f.appwrite.global/webhook",
	// 		// prefill: {
	// 		// 	name: "Sagar gupta",
	// 		// 	email: "anandguptasir@gmail.com",
	// 		// 	contact: "1234567890",
	// 		// },
	// 		notes: {
	// 			address: "razorapy official",
	// 		},
	// 		theme: {
	// 			color: "#3399cc",
	// 		},
	// 	};
	// 	const razor = new window.Razorpay(options);
	// 	razor.open();
	// 	console.log(order);
	// }, []);
	// secret ashish = yLj25aBcgqSZWkk94oVoWuYj
	const handleClick = async () => {
		const key = "rzp_test_yxAUCWH7ow1ptz";
		const amount = 100;
		const {
			data: { order },
		} = await axios.post(
			"https://658b293950d2f105f49f.appwrite.global/checkout",
			{
				"X-Custom-Header": "123",
				"Content-Type": "application/json",
				body: amount,
			}
		);
		// console.log(window);

		const options = {
			key,
			amount: order.amount,
			currency: "INR",
			name: "Sinmplyjs",
			description: "Razorpay tutorial",
			image: "https://avatars.githubusercontent.com/u/96648429?s=96&v=4",
			order_id: order.id,
			callback_url: "https://658b293950d2f105f49f.appwrite.global/webhook",
			// prefill: {
			// 	name: "Sagar gupta",
			// 	email: "anandguptasir@gmail.com",
			// 	contact: "1234567890",
			// },
			notes: {
				address: "razorapy official",
			},
			theme: {
				color: "#3399cc",
			},
		};
		const razor = new window.Razorpay(options);
		razor.open();
		console.log(order);
	};
	const testPayment = async () => {
		try {
			const res = await authService.payment(11, 700);
			console.log(JSON.parse(res.responseBody));
			const { order } = JSON.parse(res.responseBody);
			console.log(order.id);
			// key: "rzp_test_yxAUCWH7ow1ptz",
			var options = {
				key: "rzp_test_yjIm0YrVH5k50L",
				currency: "INR",
				amount: order.amount,
				order_id: order.id,
				name: "Events",
				description: "Thank you for nothing. Please give us some money",
				image: "",
				handler: async function (response) {
					const res = await authService.paymentVerify(
						response.razorpay_signature,
						response.razorpay_order_id,
						response.razorpay_payment_id
					);
					// alert(response.razorpay_payment_id);
					// alert(response.razorpay_order_id);
					// alert(response.razorpay_signature);
					alert(res);
				},
			};
			const razor = new window.Razorpay(options);
			razor.open();
		} catch (error) {
			console.log(error);
		}
	};
	const testSubscribe = async () => {
		try {
			const res = await authService.paymentSubscribe(12);
			console.log(JSON.parse(res.responseBody));
			const { subscription } = JSON.parse(res.responseBody);
			console.log(subscription.id);
			// key: "rzp_test_yxAUCWH7ow1ptz",
			var options = {
				key: "rzp_test_yjIm0YrVH5k50L",
				currency: "INR",
				// amount: order.amount,
				// order_id: order.id,
				subscription_id: subscription.id,
				name: "Events",
				description: "Thank you for nothing. Please give us some money",
				image: "",
				handler: async function (response) {
					const res = await authService.paymentSubscribeVerify(
						response.razorpay_signature,
						response.razorpay_subscription_id,
						response.razorpay_payment_id
					);
					// alert(response.razorpay_payment_id);
					// alert(response.razorpay_order_id);
					// alert(response.razorpay_signature);
					alert(res);
				},
			};
			const razor = new window.Razorpay(options);
			razor.open();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<button onClick={handleClick}>Click TO test</button>
			{/* <Button onClick={testPayment}>Pay now</Button> */}
			<Button onClick={testSubscribe}>Subscripbe Pay now</Button>
		</div>
	);
};

export default Testing;
