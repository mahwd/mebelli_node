import path from 'path'
import fs from 'fs'
import AdminBro from "admin-bro";

const after = async (response: any, request: any, context: any) => {
    // const {record, uploadImage} = context
    // if (record.isValid() && uploadImage) {
    //     const filePath = path.join('uploads', record.id().toString(), uploadImage.name)
    //     console.log(' record -> ', record)
    //     await fs.promises.mkdir(path.dirname(filePath), {recursive: true})
    //     await fs.promises.rename(uploadImage.path, filePath)
    //     // await record.update({  })
    // }
};


const before = async (request: any) => {
    if (request.method === 'post') {
        //
    }
    return request;
};

export default {
    before,
    after
}
