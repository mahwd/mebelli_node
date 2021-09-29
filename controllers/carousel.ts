import {NextFunction, Request, Response} from 'express';
import Carousel from "../models/Carousel";

const getCarousel = (req: Request, res: Response, next: NextFunction) => {
    Carousel.find()
        .exec()
        .then((carousel) => {
            return res.status(200).json({
                carousel_items: carousel,
                count: carousel.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default {getCarousel};
