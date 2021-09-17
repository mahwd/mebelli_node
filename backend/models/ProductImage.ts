import mongoose , {Schema} from "mongoose";
import Product from "./Product";
import IProductImage from "../interfaces/IProductImage";

const productImageSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    }
})


export default mongoose.model<IProductImage>('ProductImage', productImageSchema)
