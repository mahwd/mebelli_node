import argon2 from 'argon2'

const after = async (response:any) => {
    if (response.record && response.record.errors) {
        response.record.errors.password = response.record.errors.encryptedPassword;
    }
    return response;
};


const before = async (request:any) => {
    if (request.method === 'post') {
        const { password, ...otherParams } = request.payload;

        if (password) {
            const encryptedPassword = await argon2.hash(password);

            return {
                ...request,
                payload: {
                    ...otherParams,
                    encryptedPassword,
                },
            };
        }
    }
    return request;
};

export default {
    before,
    after
}
