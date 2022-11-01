const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>console.log("La conexión a la bd se realizo"))
  .catch(err=>console.log("Hubo un error", err))