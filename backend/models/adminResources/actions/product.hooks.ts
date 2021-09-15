const after = async (response:any) => {
    console.log(response.record)
    return response;
};


const before = async (request:any) => {
    if (request.method === 'post') {

    }
    return request;
};

export default {
    before,
    after
}
