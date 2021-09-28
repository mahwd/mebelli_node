import Carousel from "../models/Carousel";
import AdminBro from "admin-bro";
import carousel_hooks from './actions/carousel.upload.hooks';

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
                before: carousel_hooks.before,
                after: carousel_hooks.after
            },
            edit: {
                before: carousel_hooks.before,
                after: carousel_hooks.after
            }
        }
    }
}

export default CarouselAdmin
