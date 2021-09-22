import Category from "../models/Category";

const CategoryAdmin = {
    resource: Category,
    options: {
        properties: {
            parentId: {}
        }
    }
}

export default CategoryAdmin
