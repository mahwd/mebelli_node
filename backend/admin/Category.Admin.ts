import Category from "../models/Category";

const CategoryAdmin = {
    resource: Category,
    options: {
        properties: {
            parentId: {
                availableValues: async () => await Category.find({parentId: null}).exec()
            }
        }
    }
}

export default CategoryAdmin
