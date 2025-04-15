const mongoose= require('mongoose');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken'); 


const captainSchema= new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required :true,
            minlength: [4, 'first name must be contain atleast 4 character'],
        },
        lastname: {
            type: String,
            minlength: [3, 'last name must be contain atleast 3 character']
        },

    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5,'email name must be contain atleast 5 character']
},
password:{
    type: String,
    required: true,
    select: false,

},
socketId:{
    type: String,
},
 
 status:{
    type: String,
    enum :['active', 'inactive'],
    default: 'inactive'
 },
 vehical:{
    color:{
        type: String,
        required: true,
        minlength: [3, 'Color must be at least 3 character long'],

    },
    plate:{
        type: String,
        required: true,
        minlength: [3, 'plate should be atleast 3 character']
    },
    capacity:{
        type: Number,
        required: true,
        min: [1, 'Capacity must be atleast 1']
    },
   vehicaltype:{
    type: String,
    required: true,
    enum: ['car', 'Bike', 'auto' ],

    }

 },

 location:{
    lat:{
        type: Number,

    },
    lng:{
        type: Number,

    }
 }

})
captainSchema.methods.generateAuthToken= function(){
    const token= jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}
captainSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password, this.password)
}
captainSchema.statics.hashPassword= async function(password){
    return await bcrypt.hash(password, 10)
}

const captainModel= mongoose.model('captain', captainSchema);

module.exports= captainModel;