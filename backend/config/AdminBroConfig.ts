import AdminBro, {AdminBroOptions} from 'admin-bro'
import AdminBroMongoose from '@admin-bro/mongoose'
import AdminBroExpress from '@admin-bro/express'
import CategoryAdmin from "../models/adminResources/Category.Admin";
import UserAdmin from "../models/adminResources/User.Admin";
import ProductAdmin from "../models/adminResources/Product.Admin";
import ProductImageAdmin from "../models/adminResources/ProductImage.Admin";

/* Register mongodb adapter */
AdminBro.registerAdapter(AdminBroMongoose)

/* AdminBro options */
export const options: AdminBroOptions = {
    rootPath: '/admin',
    resources: [ProductImageAdmin, ProductAdmin, UserAdmin, CategoryAdmin],
    branding: {
        companyName: 'Mebelli'
    }
}

/* AdminBro instance */
export const adminBro = new AdminBro(options)

/* AdminBro router */
export const router = AdminBroExpress.buildRouter(adminBro)
