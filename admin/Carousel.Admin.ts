import Carousel from "../models/Carousel";
import AdminBro from "admin-bro";
import CarouselHooks from "./actions/carousel.upload.hooks";

const CarouselAdmin = {
    resource: Carousel,
    options: {
        properties: {
            imageUrl: {
                isVisible: false
            },
            image: {
                components: {
                    edit: AdminBro.bundle('./custom_components/carousel-image-edit.tsx'),
                    list: AdminBro.bundle('./custom_components/carousel-image-list.tsx'),
                }
            }
        },
        actions: {
            new: {
                before: CarouselHooks.before,
                after: CarouselHooks.after
            },
            edit: {
                before: CarouselHooks.before,
                after: CarouselHooks.after
            }
        }
    }
}

export default CarouselAdmin
