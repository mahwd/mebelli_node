import {NextFunction, Request, Response} from 'express';
import Category from "../models/Category";

const getCategories = (req: Request, res: Response, next: NextFunction) => {
    Category.find()
        .exec()
        .then((categories) => {
            return res.status(200).json({
                categories,
                count: categories.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default {getCategories};
