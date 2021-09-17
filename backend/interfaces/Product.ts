import { Document} from 'mongoose';
import ICategory from "./Category";
import IProductImage from "./IProductImage";

export default interface IProduct extends Document {
    title: string;
    description: string;
    price: number;
    hasDiscount: boolean;
    discount: number;
    stock: number;
    thumbnailUrl: string;
    productsImages: IProductImage[];
    category: ICategory;
}
