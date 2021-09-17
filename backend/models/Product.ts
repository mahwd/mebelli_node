import IProduct from "../interfaces/Product";
import mongoose from "mongoose";

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
        required: false
    },
    discount: {
        type: Number,
        required: false
    },
    stock: {
        type: Number,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    productsImages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductImage',
        required: true
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {timestamps: true})

export default mongoose.model<IProduct>("Product", ProductSchema)
