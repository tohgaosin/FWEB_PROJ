import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

let conn;
try {
    console.log("Connect to Local MongoDB");
    conn = await client.connect();
    console.log("Connected Successfully to MongoDB");
} catch (e) {
    console.error("Failed to connect to MongoDB", e);
    process.exit(1); // Exit with err code
};

const db = conn.db("telephone");

client.on('serverOpening', () => console.log("MongoDB connection opened"));
client.on('serverClosed', () => console.log('MongoDB server connection closed'));
client.on('serverDescriptionChanged', (event) => console.log('MongoDB server description changed:', event));

export default db;                                      