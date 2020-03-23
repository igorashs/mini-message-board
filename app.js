const express = require('express');

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
