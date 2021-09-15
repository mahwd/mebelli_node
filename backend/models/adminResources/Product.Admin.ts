import Product from "../Product";
import actions from "./actions/password.hooks";

const ProductAdmin = {
    resource: Product,
    options: {
        properties: {
            encryptedPassword: {
                isVisible: false
            },
            password: {
                type: "password"
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
