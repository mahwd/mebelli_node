import Product from "../Product";
import actions from "./actions/password.hooks";
import AdminBro from 'admin-bro'

const ProductAdmin = {
    resource: Product,
    options: {
        properties: {
            thumbnailUrl: {
                components: {
                    edit: AdminBro.bundle('./custom_components/upload-image-edit.tsx')
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
