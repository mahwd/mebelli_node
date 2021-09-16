import mongoose from "mongoose";
import ICategory from "../interfaces/Category";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: false
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: false
    }]
})

export default mongoose.model<ICategory>('Category', categorySchema)
