const express = require("express");
const multer = require('multer');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.model");
const {processAndResizeImage} = require('../functions/imageProcess');
const userRoute = express.Router()


// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

userRoute.post("/register", async(req, res)=>{
    const {password} = req.body
    try{
        const resizedImage = await processAndResizeImage(req.file.buffer);

        const profilePicture = {
            "contentType":req.file.mimetype,
             "data":resizedImage
          }   

        bcrypt.hash(password, 10, async(err, hash)=>{
            if(err){
                res.status(200).send(err)
            }else{
                const user = new userModel({
                    ...req.body,
                    profilePicture,
                    password:hash
                })
                await user.save()
                res.status(200).send({"Msg":"New User Added", "User":user})
            }
        });
    }catch(err){
        res.status(400).send(err)
    }
})

userRoute.post("/login", async(req, res)=>{
    const {email, password} = req.body
    try{
        const user = await userModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, async(err, result)=> {
                if(result){
                    var token = jwt.sign({ userId: user._id }, 'masai');
                    res.cookie('accessToken', token, {
                        httpOnly: true,
                        secure: true,
                    });
                    res.status(200).send({"Msg":"Login Successfully"})
                }else{
                    res.status(200).send(err)
                }
            });
        }else{
            res.status(200).send({"MSg":"User Not Present"})
        }
    }catch(err){
        
    }
})

module.exports={userRoute}