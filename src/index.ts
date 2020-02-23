import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import statusRouter from './routes/status.router';

dotenv.config();

const app = express();
const port = process.env.PORT; // default port to listen

app.use(bodyParser.json());
app.use('/status', statusRouter);

// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;
