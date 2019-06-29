import { Application } from 'express';
import index from './routes/index';
import login from './routes/login';
import dashboard from './routes/dashboard';

const LinkRoutes = (app: Application) => {
    app.use('/', index);
    app.use('/login', login);
    app.use('/dashboard', dashboard);
}

export default LinkRoutes;