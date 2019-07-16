import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import Router from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Router);


app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to PropertyProLite Endpoint page' });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});


export default app;
