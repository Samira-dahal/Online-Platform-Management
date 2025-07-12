

import { Request, Response } from "express";
import sequelize from "../../database/connection";
import { QueryTypes } from "sequelize";
import bcrypt from 'bcrypt'
import generateJWTToken from "../../services/generateJWTToken";


interface ITeacherData{
    teacherPassword : string, 
    id : string
}

const teacherLogin = async(req:Request,res:Response)=>{
    const {teacherEmail,teacherPassword,teacherInstituteNumber} = req.body 
    if(!teacherEmail || !teacherPassword || !teacherInstituteNumber){
        return res.status(400).json({
            message : "Please provide teacherEmail, teacherPassword, teacherInstituteNumber"
        })
    }
    const teacherData : ITeacherData[] = await sequelize.query(`SELECT * FROM teacher_${teacherInstituteNumber} WHERE teacherEmail = ? `,{
        type : QueryTypes.SELECT, 
        replacements : [teacherEmail]
    })
    if(teacherData.length == 0){
        return res.status(404).json({
            message : "Invalid credentials"
        })
    }
  const isPasswordMatched =  bcrypt.compareSync(teacherPassword,teacherData[0].teacherPassword)
  if(!isPasswordMatched){
    res.status(400).json({
        message : "Invalid credentials!!!!"
    })
  }else{
   const token =  generateJWTToken({id : teacherData[0].id,instituteNumber: teacherInstituteNumber})
   res.status(200).json({
    message : "Teacher logged in", 
    token
   })

  }

}


export {teacherLogin}