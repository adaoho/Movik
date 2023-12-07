import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPassword } from "../utils/hashPassword";

const DB_NAME = process.env.MONGO_DB_NAME;
const COLLECTION_NAME = "User";

export const mongoDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DB_NAME);

  return db;
};

export type UserModel = {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  fullname: string;
  profilePicture?: string;
};

export type UserModelCreateInput = Omit<UserModel, "_id">;

export const userRegister = async (user: UserModelCreateInput) => {
  const payloadUser: UserModelCreateInput = {
    ...user,
    password: hashPassword(user.password),
  };

  const db = await mongoDb();
  const result = await db.collection(COLLECTION_NAME).insertOne(payloadUser);

  return result;
};
