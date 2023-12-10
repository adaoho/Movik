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

export const findAllProduct = async ({
  page = 1,
  limit = 8,
}: {
  page?: number;
  limit?: number;
}) => {
  try {
    const skip = (page - 1) * limit;
    const db = await mongoDb();
    const result = (await db
      .collection(COLLECTION_NAME)
      .find()
      .limit(limit)
      .skip(skip)
      .toArray()) as ProductModel[];

    // Cara bruthforce pake as
    return result;
  } catch (error) {
    return error;
  }
};

export const findProductBySlug = async (slug: string) => {
  const db = await mongoDb();
  const result = (await db
    .collection(COLLECTION_NAME)
    .findOne({ slug: slug })) as ProductModel;

  return result;
};
