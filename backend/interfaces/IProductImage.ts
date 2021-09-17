import {Document} from "mongoose";
import IProduct from "./Product";

export default interface IProductImage extends Document {
    source: string;
    product: IProduct
}
