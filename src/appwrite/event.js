import { Client, Databases, Query, ID } from "appwrite";
import config from "../configs/config";

export class Service {
	client = new Client();
	databases;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.databases = new Databases(this.client);
	}

	async createEvent(
		userId,
		title,
		description,
		venue,
		startDate,
		endDate,
		startTime,
		endTime,
		status,
		image,
		location,
		address,
		isFree,
		price,
		tags
	) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionIdEvents,
				ID.unique(),
				{
					userId,
					title,
					description,
					venue,
					startDate,
					endDate,
					startTime,
					endTime,
					status,
					image,
					location,
					address,
					isFree,
					price,
					tags,
				}
			);
		} catch (error) {
			return { status: false, error: error };
		}
	}
}
const service = new Service();
export default service;
