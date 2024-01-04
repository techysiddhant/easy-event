import { Client, Databases, Storage, ID } from "appwrite";
import config from "../configs/config";

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				config.appwriteBucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			console.log("app write upload file", error);
			return false;
		}
	}

	async deleteFile(id) {
		try {
			await this.bucket.deleteFile(config.appwriteBucketId, id);
			return true;
		} catch (error) {
			console.log("delete file", error);
			return false;
		}
	}
	async getFilePreview(id) {
		return this.bucket.getFilePreview(config.appwriteBucketId, id);
	}
}
const service = new Service();
export default service;
