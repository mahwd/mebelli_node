import mongoose from "mongoose";
import ICategory from "../interfaces/Category";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    }
})

export default mongoose.model<ICategory>('Category', categorySchema)
