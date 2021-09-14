import {Document} from 'mongoose';
import IProduct from "./Product";

export default interface ICategory extends Document {
    title: string;
    parentId: number;
    thumbnailUrl: string;
    products: IProduct[]
}
