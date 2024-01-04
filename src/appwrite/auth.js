/* eslint-disable no-useless-catch */
import { Client, Account, ID, Databases, Query, Functions } from "appwrite";
import config from "../configs/config";
import userService from "../appwrite/user";
// import creatorService from "../appwrite/creator";
export class AuthService {
	client = new Client();
	account;
	databases;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.account = new Account(this.client);
		this.databases = new Databases(this.client);
		this.functions = new Functions(this.client);
	}

	async createVerifyUserAccount(url) {
		try {
			const sendEmail = await this.account.createVerification(url);
			if (sendEmail) {
				return sendEmail;
			}
		} catch (error) {
			throw error;
		}
	}
	async updateVerification(userId, secret) {
		try {
			const response = await this.account.updateVerification(userId, secret);
			// if (sendEmail) {
			// 	return sendEmail;
			// }
			console.log(response);
		} catch (error) {
			throw error;
		}
	}

	async loginUserAccount({ email, password }) {
		try {
			const userAccount = await this.account.createEmailSession(email, password);
			if (userAccount) {
				return userAccount;
			}
		} catch (error) {
			throw error;
		}
	}
	async createUserAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (userAccount) {
				const loginUser = await this.loginUserAccount({ email, password });
				if (loginUser) {
					const userCreated = await userService.createUser(
						userAccount.$id,
						userAccount.email,
						userAccount.name
					);
					if (userCreated) {
						return loginUser;
					}
				}
			}
		} catch (error) {
			throw error;
		}
	}
	async createCreatorAccount({ email, password, name, company }) {
		try {
			const creatorAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name,
				company
			);
			if (creatorAccount) {
				const loginUser = await this.loginUserAccount({ email, password });
				if (loginUser) {
					const userCreated = await userService.createCreator(
						creatorAccount.$id,
						creatorAccount.email,
						creatorAccount.name,
						company
					);
					if (userCreated) {
						console.log(userCreated);
						if (userCreated.userId == loginUser.$id) {
							return loginUser;
						} else {
							return null;
						}
					}
				}
			}
		} catch (error) {
			throw error;
		}
	}
	async getCurrentUser() {
		try {
			const currentAccount = await this.account.get();
			if (!currentAccount) return { error: "Not Logged in" };

			const currentUser = await this.databases.listDocuments(
				config.appwriteDatabaseId,
				config.appwriteCollectionIdUsers,
				[Query.equal("userId", currentAccount.$id)]
			);
			if (!currentUser) return { error: "User not found" };
			return currentUser.documents[0];
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
	async logout() {
		try {
			await this.account.deleteSessions();
		} catch (error) {
			throw error;
		}
	}
	async initiateForgotPassword(email, url) {
		try {
			const response = await this.account.createRecovery(email, url);
			if (response) {
				return response;
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async updatePassword(userId, secret, password, passwordAgain) {
		try {
			const response = await this.account.updateRecovery(
				userId,
				secret,
				password,
				passwordAgain
			);
			if (response) {
				return response;
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async payment(userId, amount) {
		try {
			const execution = await this.functions.createExecution(
				"658b2938a27bb910ba8e",
				JSON.stringify({ userId: userId, amount: amount }),
				false,
				"/checkout",
				"POST",
				{ "content-type": "application/json", body: amount }
			);
			return execution;
		} catch (error) {
			console.log("Payment error", error);
		}
	}
	async paymentSubscribe(userId) {
		try {
			const execution = await this.functions.createExecution(
				"658b2938a27bb910ba8e",
				JSON.stringify({ userId: userId }),
				false,
				"/subscription",
				"POST",
				{ "content-type": "application/json", body: userId }
			);
			return execution;
		} catch (error) {
			console.log("Payment error", error);
		}
	}
	async paymentVerify(
		razorpay_payment_id,
		razorpay_order_id,
		razorpay_signature
	) {
		try {
			const execution = await this.functions.createExecution(
				"658b2938a27bb910ba8e",
				JSON.stringify({
					razorpay_signature: razorpay_signature,
					razorpay_order_id: razorpay_order_id,
					razorpay_payment_id: razorpay_payment_id,
				}),
				false,
				"/verify",
				"POST",
				{
					"content-type": "application/json",
					body: {
						razorpay_signature: razorpay_signature,
						razorpay_order_id: razorpay_order_id,
						razorpay_payment_id: razorpay_payment_id,
					},
				}
			);
			return execution;
		} catch (error) {
			console.log("Payment error", error);
		}
	}

	async paymentSubscribeVerify(
		razorpay_payment_id,
		razorpay_subscription_id,
		razorpay_signature
	) {
		try {
			const execution = await this.functions.createExecution(
				"658b2938a27bb910ba8e",
				JSON.stringify({
					razorpay_signature: razorpay_signature,
					razorpay_order_id: razorpay_subscription_id,
					razorpay_payment_id: razorpay_payment_id,
				}),
				false,
				"/verify",
				"POST",
				{
					"content-type": "application/json",
					body: {
						razorpay_signature: razorpay_signature,
						razorpay_order_id: razorpay_subscription_id,
						razorpay_payment_id: razorpay_payment_id,
					},
				}
			);
			return execution;
		} catch (error) {
			console.log("Payment error", error);
		}
	}
}
const authService = new AuthService();
export default authService;
