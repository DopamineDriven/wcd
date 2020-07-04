import * as dotenv from "dotenv";
dotenv.config();

import { connectDatabase } from "../server/utils";

const clear = async () => {
    try {
        console.log("[clear]: running...");
        const db = await connectDatabase();

        const posts = await db.posts.find({}).toArray();

        if (posts.length > 0) {
            await db.posts.drop();
        }

        console.log("[clear]: success");
    } catch {
        throw new Error("[clear]: failed");
    }
};

clear();