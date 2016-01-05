import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname, '../../public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

routes(app);

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
