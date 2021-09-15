import AdminBroExpress from '@admin-bro/express'
import {adminBro} from "../config/AdminBroConfig";
import User from "../models/User";
import argon2 from 'argon2';

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
        cookieName: 'mebellin',
        cookiePassword: 'Mm123456!@#',
        authenticate: async (email, password) => {
            const user = await User.findOne({email})

            if (user && await argon2.verify(user.encryptedPassword, password)) {
                return user.toJSON()
            }
            return null
        }
    },
    null
)

export default {router}
