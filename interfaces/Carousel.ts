import {Document} from 'mongoose';

export default interface ICarousel extends Document {
    title: string;
    description: string;
    imageUrl: string;
}
