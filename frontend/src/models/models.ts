
export type Category = {
    title: string,
    products: Product[]
}

export type Product = {
    title: string;
    description: string;
    price: number;
    hasDiscount: boolean;
    discount: number;
    stock: number;
    images: string[];
    category: Category;
}
