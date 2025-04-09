
import { MongoClient, ServerApiVersion } from 'mongodb';

// Connection URI
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/meetx';

// Create a MongoClient with a MongoClientOptions object
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to MongoDB server");
    
    // Return the database
    return client.db('meetx');
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}

export default client;
