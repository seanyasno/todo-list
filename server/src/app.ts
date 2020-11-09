import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import {tasking} from './routes/tasking';

dotenv.config();
const app = express();

// init
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.json());

// routes
app.use('/tasks', tasking);

// listen
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;