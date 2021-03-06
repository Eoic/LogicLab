import express, { Application } from 'express';
import path from 'path';
import { LinkRoutes } from './route-linker';

const app: Application = express();
const port = 5000;

app.set('view engine', 'pug');
app.set('/views', path.join(__dirname, 'views'));
app.use(express.static('public'));
LinkRoutes(app);

app.listen(port, () => {
    console.log("Running on port " + port);
});
