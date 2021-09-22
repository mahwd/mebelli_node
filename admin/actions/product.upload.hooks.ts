import path from 'path'
import fs from 'fs'
import {getFilesPathesByKey} from '../../config/helpers'

const after = async (response: any, request: any, context: any) => {
    const {record, images} = context
    const filePathes = []
    if (images && images.length) {
        for (const image of images) {
            const filePath = path.join('uploads', record.id().toString(), image.name)
            await fs.promises.mkdir(path.dirname(filePath), {recursive: true})
            await fs.promises.rename(image.path, filePath)
            filePathes.push(`/${filePath.replace(/\\/g, "/")}`)
        }
        await record.update({images: filePathes});
    }
    return response
};

const before = async (request: any, context: any) => {
    if (request.method === 'post') {
        context.images = getFilesPathesByKey("imageFiles", request.payload)
        return request
    }
    return request;
};

export default {
    before,
    after
}
