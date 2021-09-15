import AdminBro, {AdminBroOptions} from 'admin-bro'
import AdminBroMongoose from '@admin-bro/mongoose'
import AdminBroExpress from '@admin-bro/express'
import Product from '../models/Product'
import Category from "../models/Category";
import UserAdmin from "../models/adminResources/User.Admin";

/* Register mongodb adapter */
AdminBro.registerAdapter(AdminBroMongoose)

/* AdminBro options */
export const options: AdminBroOptions = {
    rootPath: '/admin',
    resources: [Product, UserAdmin, Category],
    branding: {
        companyName: 'Mebelli'
    }
}

/* AdminBro instance */
export const adminBro = new AdminBro(options)

/* AdminBro router */
export const router = AdminBroExpress.buildRouter(adminBro)
