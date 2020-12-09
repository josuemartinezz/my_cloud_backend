const app = require('./server');
const mongoose = require('mongoose');
require('dotenv').config()

const mongooseConnectionString = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.olpxk.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(mongooseConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log('error db:', e))

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log('App corriendo en el puerto http://localhost:' + PORT);
})