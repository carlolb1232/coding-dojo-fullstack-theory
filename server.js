const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const personRoutes = require('./server/routes/person.routes');
require('./server/config/mongoose.config');

personRoutes(app);


app.listen(port, ()=>{
  console.log(`El puerto ${port} esta siendo escuchando`)
})