const express = require('express');
const app = express();
const port = 3000;

/* routing */

const mainRouter = require ('./routes/main');
app.use('/',mainRouter);
app.use('/about',mainRouter);



/* settings */

app.use(express.static('public'));

app.listen(port, () => console.log('Servidor funcionando'));