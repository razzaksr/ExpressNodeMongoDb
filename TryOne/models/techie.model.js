const mongoose = require('mongoose')

let techieSchema=mongoose.Schema({
    name:{
        type:String
    },
    contact:{
        type:Number
    },
    expert:{
        type:String
    },
    exp:{
        type:Number
    },
    commercial:{
        type:Number
    }
});

mongoose.model('techie',techieSchema)