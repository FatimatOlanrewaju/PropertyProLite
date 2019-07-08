import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to PropertyProLite Endpoint page' });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Port running on ${port}`);
});


export default app;
