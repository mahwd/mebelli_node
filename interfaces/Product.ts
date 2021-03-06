import { Document} from 'mongoose';
import ICategory from "./Category";

export default interface IProduct extends Document {
    title: string;
    description: string;
    price: number;
    hasDiscount: boolean;
    discount: number;
    stock: number;
    images: string[];
    category: ICategory;
}
