import { config } from "../config/Constants";
import mongoose from "mongoose";

export class MongoConection {
    public async conect(): Promise<void> {
        try {
           await mongoose.connect(config.MONGO_CONECTION, { useNewUrlParser: true , useUnifiedTopology: true })
            console.log("Database conected")
        } catch (error) {
            console.error(error.message)
            process.exit(1)
        }
    }
}