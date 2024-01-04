import { Client, Databases, Storage, Query, ID } from "appwrite";
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

	async createUser(userId, email, name) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionIdUsers,
				ID.unique(),
				{
					userId,
					name,
					email,
				}
			);
		} catch (error) {
			return { status: false, error: error };
		}
	}

	async createCreator(userId, email, name, company) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionIdUsers,
				ID.unique(),
				{
					userId,
					name,
					email,
					company,
					role: "creator",
				}
			);
		} catch (error) {
			return { status: false, error: error };
		}
	}
}
const service = new Service();
export default service;
