import http from 'http';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { apiFailure, apiSucess } from 'utils/apiUtils.js';
import { mongoConnector } from 'data/mongo.js';
import api from 'routes/index.js';
import log from 'utils/logger.js';

const envFile = `.env.${process.env.ENVIRONMENT_NAME}`;

dotenv.config({
    path: envFile
});

const app = express();

app.set('port', process.env.PORT || 9000);

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
mongoConnector();

api(app);

app.get('/', (req, res) => {
    return apiSucess(res, 'Tntra Todo app at your service !!!');
});

if (process.env.NODE_ENV !== 'test') {
    const server = http.createServer(app);
    server.listen(app.get('port'), () => {
        log.info('Server is running at port %s', app.get('port'));
    });
} else {
    log.info('App in testing mode.');
}

export default app;
