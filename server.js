import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import HTMLRoutes from './app/routing/htmlRoutes';
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

HTMLRoutes(app);

app.listen(PORT,() =>{
    console.log('App listening on port ' + PORT);
});