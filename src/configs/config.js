const config = {
	appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
	appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
	appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
	appwriteCollectionIdEvents: String(
		import.meta.env.VITE_APPWRITE_COLLECTION_ID_EVENTS
	),
	appwriteCollectionIdUsers: String(
		import.meta.env.VITE_APPWRITE_COLLECTION_ID_USERS
	),
	appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
