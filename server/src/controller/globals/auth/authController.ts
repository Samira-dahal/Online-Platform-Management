

import {Request,Response} from 'express'
import User from '../../../database/models/userModel'
import bcrypt from "bcrypt"


class AuthController{
   static async registerUser(req:Request,res:Response){
   
    if(req.body == undefined){
        console.log("triggered")
        res.status(400).json({
            message : "Please provide username, password, email"
        })
        return
    }
     const{username, password, email} = req.body
      console.log(req.body)
    if(!username || !password || !email){
      res.status(400).json({
         message : "Please provide username, password, email"
     })
     return
    }
     await User.create({
         username :username, 
         password : bcrypt.hashSync(password, 12), 
         email : email
     })
     res.status(201).json({
         message : "User registered successfully"
     })
   }
}

export default AuthController

