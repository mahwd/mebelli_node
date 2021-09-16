import path from 'path'
import fs from 'fs'
import AdminBro from "admin-bro";

const after = async (response: any, request: any, context: any) => {
    const {record, uploadImage} = context
    if (record.isValid() && uploadImage) {
        const filePath = path.join('uploads', record.id().toString(), uploadImage.name)
        await fs.promises.mkdir(path.dirname(filePath), {recursive: true})
        await fs.promises.rename(uploadImage.path, filePath)
        await record.update({thumbnailUrl: `/${filePath}`})
    }
    return response
};

const before = async (request: any, context: any) => {
    console.log('before fired')
    if (request.method === 'post') {
        const {thumbnailUrl, ...otherParams} = request.payload;

        // eslint-disable-next-line no-param-reassign
        context.uploadImage = thumbnailUrl;

        return {
            ...request,
            payload: otherParams,
        };
    }
    return request;
};

export default {
    before,
    after
}
