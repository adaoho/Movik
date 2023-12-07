import { MongoClient } from "mongodb";

const mongodbString = process.env.MONGODB_CONNECTION_STRING;

// console.log(mongodbString, "<<< from env");

if (!mongodbString) {
  throw new Error("MONGODB_CONNECTION_STRING is not defined");
}

let client: MongoClient;

export const getMongoClientInstance = async () => {
  if (!client) {
    client = await MongoClient.connect(mongodbString);
    await client.connect();
  }

  return client;
};
