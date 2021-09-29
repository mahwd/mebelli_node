
export type TCategory = {
    _id: string;
    title: string,
    products: TProduct[]
}

export type TProduct = {
    _id: string;
    title: string;
    description: string;
    price: number;
    hasDiscount: boolean;
    discount: number;
    stock: number;
    images: string[];
    category: TCategory;
}

export type TCarousel = {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
}
