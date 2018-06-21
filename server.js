import express from 'express';
import bodyParser from 'body-parser';
import HTMLRoutes from './app/routing/htmlRoutes';
import APIRoutes from './app/routing/apiRoutes';
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

HTMLRoutes(app);
APIRoutes(app);

app.listen(PORT,() => {
    console.log('App listening on port ' + PORT);
});