import AdminBro, {AdminBroOptions} from 'admin-bro'
import AdminBroExpress from '@admin-bro/express'
import Product from '../models/Product'
import Category from "../models/Category";
import AdminBroMongoose from '@admin-bro/mongoose'

AdminBro.registerAdapter(AdminBroMongoose)


const options: AdminBroOptions = {
    rootPath: '/admin',
    resources: [Product, Category],
    branding: {
        companyName: 'Mebelli'
    }
}


const adminBro = new AdminBro(options)

const router = AdminBroExpress.buildRouter(adminBro)

export default {options, router, adminBro}
