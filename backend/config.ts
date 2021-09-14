const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false
};

const mongo = {
    options: MONGO_OPTIONS,
    url: 'mongodb://localhost:27017'
};


export default  {
    PORT: 3080,
    mongo,

}
