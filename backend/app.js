import dotenv from 'dotenv'
dotenv.config();
import router from './routes/index.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
const port = process.env.PORT;

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}!`)
});
