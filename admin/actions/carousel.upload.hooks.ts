const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');


/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response: any, request: any, context: any) => {
    const {record, image} = context;

    if (record.isValid() && image) {
        const filePath = path.join('uploads', record.id().toString(), image.name);
        await fs.promises.mkdir(path.dirname(filePath), {recursive: true});

        await fs.promises.rename(image.path, filePath);

        await record.update({imageUrl: `/${filePath.replace(/\\/g, "/")}`});
    }
    return response;
};

/** @type {AdminBro.Before} */
const before = async (request: any, context: any) => {
    if (request.method === 'post') {
        const {image, ...otherParams} = request.payload;

        // eslint-disable-next-line no-param-reassign
        context.image = image;

        return {
            ...request,
            payload: otherParams,
        };
    }
    return request;
};

export default {after, before};
