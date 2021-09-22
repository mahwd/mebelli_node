import AdminBro, {AdminBroOptions} from 'admin-bro'
import AdminBroMongoose from '@admin-bro/mongoose'
import AdminBroExpress from '@admin-bro/express'
import CategoryAdmin from "../admin/Category.Admin";
import UserAdmin from "../admin/User.Admin";
import ProductAdmin from "../admin/Product.Admin";

/* Register mongodb adapter */
AdminBro.registerAdapter(AdminBroMongoose)

/* AdminBro options */
export const options: AdminBroOptions = {
    rootPath: '/admin',
    resources: [ProductAdmin, UserAdmin, CategoryAdmin],
    dashboard: {
        handler: async () => {
            return {some: 'output'}
        },
        component: AdminBro.bundle('../admin/custom_components/dashboard.tsx')
    },
    branding: {
        companyName: 'Mebelli'
    }
}

/* AdminBro instance */
export const adminBro = new AdminBro(options)

/* AdminBro router */
export const router = AdminBroExpress.buildRouter(adminBro)
