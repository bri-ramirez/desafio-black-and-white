import express from 'express';
import cors from 'cors';
import router from './router.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
  console.log('servidor en puerto :', PORT);
});