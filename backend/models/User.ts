import mongoose from "mongoose";
import IUser from "../interfaces/User";

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: false
    },
    parentId: {
        type: Number,
        required: false
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }]
})

export default mongoose.model<IUser>('User', userSchema)
