const mongoose = require('mongoose');

const setSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   pokemon: [{
      name: { type: String, required: true },
      type: { type: String, required: true },
       url: { type: String, required: true }
   }]
});

module.exports = mongoose.model('Set', setSchema);