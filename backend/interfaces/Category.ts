import {Document} from 'mongoose';
import IProduct from "./Product";

export default interface ICategory extends Document {
    title: string;
    parentId: ICategory;
    thumbnailUrl: string;
    products: IProduct[]
}
