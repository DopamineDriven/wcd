import * as dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
import { Database, Post } from "../shared";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = client.db("wcd");

    return {
        posts: db.collection<Post>("posts")
    };
};
