import express from 'express';
import users from './users'
import propertyRoutes from './property';

const app = express();

app.use('/api/v1', users);
app.use('/api/v1', propertyRoutes);

export default app;