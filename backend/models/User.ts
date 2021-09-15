import mongoose from "mongoose";
import IUser from "../interfaces/User";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    encryptedPassword: {
        type: String,
        required: true
    }
})

export default mongoose.model<IUser>('User', userSchema)
