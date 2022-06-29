import app from '../app/index.js';
import http from 'http';
import dotenv from 'dotenv';

const envFile = `.env.${process.env.ENVIRONMENT_NAME}`

dotenv.config({
    path: envFile
});


if (process.env.NODE_ENV !== 'test'){
    const server = http.createServer(app);
    server.listen(app.get('port'),() => {
        console.log('Server is running at port %s', app.get('port'));
    });
}