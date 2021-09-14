import IProduct from "../interfaces/Product";
import mongoose from "mongoose";
import ICategory from "../interfaces/Category";

const ProductSchema: mongoose.Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hasDiscount: {
        type: Boolean,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }   ,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {timestamps: true})

export default mongoose.model<IProduct>("Product", ProductSchema)