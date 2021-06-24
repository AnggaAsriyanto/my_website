const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(process.env.PORT, process.env.IP, () => console.log('Server has started!'));

