const userModel = require('../models/users.model')
module.exports.createUser= async({
    firstname,lastname,email,password
})=>{
    if(!firstname ||  !email || !password){
        throw new Error("all fildes are required");
    }

    const user=await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
         password,

    })

    return user;
}