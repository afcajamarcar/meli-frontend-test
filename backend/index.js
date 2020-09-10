import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/routes';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use('/api/items', router);

export const server = app.listen(port, function () {
    console.log(`Backend running on port ${port}!`);
});