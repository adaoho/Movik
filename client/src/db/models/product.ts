import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DB_NAME = process.env.MONGODB_NAME;
const COLLECTION_NAME = "Product";

export const mongoDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DB_NAME);

  return db;
};

export type ProductModel = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: string;
  tag: string[];
  thumbnail: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export const findAllProduct = async () => {
  const db = await mongoDb();
  const result = (await db
    .collection(COLLECTION_NAME)
    .find()
    .toArray()) as ProductModel[];

  return result;
};
