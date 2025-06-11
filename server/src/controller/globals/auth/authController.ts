

import {Request,Response} from 'express'
import User from '../../../database/models/userModel'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


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

   static async loginUser(req:Request,res:Response){
     const {email, password} = req.body
      if(!email || !password){
            res.status(400).json({
                message : "Please provide email and password"
            })
            return
        }

       const data = await User.findAll({
            where: {
                email   
            }
        })

        if(data.length == 0){
            res.status(404).json({
                message : "User not found"
            })
        }else{
            const isPasswordMatch = bcrypt.compareSync(password, data[0].password)
            if(isPasswordMatch){
               const token =  jwt.sign({id :data[0].id },"thisissecret", {
                    expiresIn: '30d'
                })
                res.json({
                    token : token,
                    message : "Login successful",
                })
            }
            res.status(401).json({
                message : "Invalid email or password"
            })

        }
        

    }
}

export default AuthController

