import ProductImage from "../ProductImage";
import AdminBro from "admin-bro";
import actions from "./actions/productImage.upload.hooks";

const ProductImageAdmin = {
    resource: ProductImage,
    options: {
        properties: {
            source: {
                components: {
                    edit: AdminBro.bundle('./custom_components/upload-image-edit.tsx'),
                    list: AdminBro.bundle('./custom_components/upload-image-list.tsx'),
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

export default ProductImageAdmin
