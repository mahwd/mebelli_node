import {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';
import Product from "../models/Product";

const createProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    let {title, description, price, hasDiscount, discount, stock, thumbnailUrl, imageUrl} = req.body;

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        title,
        description,
        price,
        hasDiscount,
        discount,
        stock,
        thumbnailUrl,
        imageUrl
    });

    return product
        .save()
        .then((result) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getProducts = (req: Request, res: Response, next: NextFunction) => {
    Product.find()
        .exec()
        .then((products) => {
            return res.status(200).json({
                products: products,
                count: products.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default {createProduct, getProducts};
