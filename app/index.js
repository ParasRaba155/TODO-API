import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { mongoConnector } from '../data/mongo.js';

const envFile = `.env.${process.env.ENVIRONMENT_NAME}`


dotenv.config({
    path: envFile
});


const app = express();

app.set('port', process.env.PORT || 9000)

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
mongoConnector();

import taskRoute from '../routes/taskRoute.js';
app.use('/tasks',taskRoute);

app.get('/', (req, res) => {
    res.send('Tntra Todo app at your service !').status(200);
})


export default app;