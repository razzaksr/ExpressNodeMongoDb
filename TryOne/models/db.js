const mongoose=require('mongoose')

const uri = "mongodb+srv://razak:mohamed@scriptmani.q77zz.mongodb.net/zealous?retryWrites=true&w=majority";
/* const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err){console.log("Connected");}
    else{console.log("Fail to connect");}
})

require('./techie.model')