const express = require("express");
const db = require('./config/db');
const path = require("path")
require('dotenv').config();
const app = express();
const helmet = require('helmet')
app.use(
  helmet.hidePoweredBy(),
  helmet.frameguard({action: 'deny'}),
  helmet.hsts(),
  helmet.noSniff(),
  helmet.dnsPrefetchControl(),
  helmet.ieNoOpen(),
  helmet.referrerPolicy(),
  helmet.xssFilter(),
  helmet.contentSecurityPolicy({ directives: { defaultSrc:["'self'"],scriptSrc: ["'self'", "trusted-cdn.com"] , "img-src": ["'self'", "https: data:"] }} )
 );

const port = process.env.PORT;
const cors = require('cors');
const data = require('./routes/data')
const user = require('./routes/user')


db();
app.use(express.json())
const corsOption = {
  origin: 'http://localhost:3000',
  Credential: true,
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

app.use(cors(corsOption))
app.use('/data', data)
app.use('/user',user)

app.listen(port, () => {
  console.log(`server listen on port ${port}`)
})
