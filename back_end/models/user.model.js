const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    pancard:String,
    email:String,
    gender:String,
    password:String,
    profilePicture: {
        data: Buffer,
        contentType: String,
      }
},{
    versionKey:false
})

const userModel = mongoose.model("user", userSchema)

module.exports={userModel}