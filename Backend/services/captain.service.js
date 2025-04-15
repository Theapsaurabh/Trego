const captainModel= require('../models/captain.model')

module.exports.createCaptain= async ({
    firstname, lastname, email, password, color,
    plate, capacity, vehicaltype
})=>{
    if(!firstname|| !lastname|| !email|| !password|| !color||
        !plate|| !capacity|| !vehicaltype){
            throw new Error('all field are require')
        }

        const captain = captainModel.create({
            fullname: {
                firstname,
                lastname
            },
            email,
            password,
            vehical:{
                color,
                plate,
                capacity,
                vehicaltype
            }
        })
        return captain;
}