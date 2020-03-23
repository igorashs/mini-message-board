const express = require('express');

const indexRouter = require('./routes/index');

const app = express();
const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
