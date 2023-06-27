import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoute from './infrastructure/routes/user.route';
import dbInit from './infrastructure/database/dbInit';

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use(userRoute);

dbInit().then();

app.listen(PORT, () => console.log('Server is running on port ' + PORT));
