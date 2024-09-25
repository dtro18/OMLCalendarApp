// MongoClient is a class used to create a client instance to connect to a MongoDB database
// ServerAPI version specifies the API version to use when connecting to MongoDB
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
// Creates a new instance of MongoClient, specifying which version of the MongoDB API to use
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  // Await just means that connection is established before proceeding to next step
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

// Selects "employees" database from MongoDB and assigns it the db variable. 
// This db instance is used to interact with the employees database. 
// The employees database is created if it does not exist.
let db = client.db("employees");

export default db;