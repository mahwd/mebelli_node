import http from 'http';
import bodyParser  from 'body-parser'
import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import productRoutes from './routes/product';
import adminBroRoutes from "./routes/adminBro";


const router = express.Router();
const PORT = config.PORT || 3080;
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/api', productRoutes)
app.use(adminBroRoutes.adminBro.options.rootPath, adminBroRoutes.router)

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/* connecting to mongo */
mongoose.connect(config.mongo.url, config.mongo.options).then((mongo) => {
    console.log('connected to mongodb!')
})

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log('server listening on port', PORT)
})
