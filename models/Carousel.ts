import mongoose from "mongoose";
import ICarousel from "../interfaces/Carousel";

const carouselSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    }
})

export default mongoose.model<ICarousel>('Carousel', carouselSchema)
