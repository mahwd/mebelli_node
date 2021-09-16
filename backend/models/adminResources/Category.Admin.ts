import Category from "../Category";
import actions from "./actions/category.hooks";
import AdminBro from 'admin-bro'

const ProductAdmin = {
    resource: Category,
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
