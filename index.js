import express from 'express';
import usersRouter from './routes/users.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
