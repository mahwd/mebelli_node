import path from 'path'
import fs from 'fs'

const after = async (response: any, request: any, context: any) => {
    const {record, uploadImage} = context
    if (uploadImage) {
        const filePath = path.join('uploads', record.id().toString(), uploadImage.name)
        await fs.promises.mkdir(path.dirname(filePath), {recursive: true})
        await fs.promises.rename(uploadImage.path, filePath)
        await record.update({source: `/${filePath}`})
    }
    return response
};

const before = async (request: any, context: any) => {
    if (request.method === 'post') {
        const {source, ...otherParams} = request.payload;

        // eslint-disable-next-line no-param-reassign
        context.uploadImage = source;

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
