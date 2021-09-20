import User from "../models/User";
import actions from "./actions/password.hooks";

const UserAdmin = {
    resource: User,
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

export default UserAdmin
