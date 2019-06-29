import { Application } from 'express';
import index from './routes/index';
import login from './routes/login';

const LinkRoutes = (app: Application) => {
    app.use('/', index);
    app.use('/login', login);
}

export default LinkRoutes;