import Product from "../models/Product";
import actions from "./actions/product.upload.hooks";
import AdminBro from 'admin-bro'

const ProductAdmin = {
    resource: Product,
    options: {
        properties: {
            images: {isVisible: false},
            imageFiles: {
                components: {
                    edit: AdminBro.bundle('./custom_components/upload-image-edit.tsx'),
                    list: AdminBro.bundle('./custom_components/upload-image-list.tsx'),
                    show: AdminBro.bundle('./custom_components/upload-image-show.tsx'),
                }
            }
        },
        actions: {
            new: {
                before: actions.before,
                after: actions.after
            },
            edit: {
                before: actions.before,
                after: actions.after
            }
        }
    }
}

export default ProductAdmin
