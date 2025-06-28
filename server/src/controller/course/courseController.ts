import { Request, Response } from 'express';
import sequelize from '../../database/connection';
import { IExtendedRequest } from '../../middleware/type';


exports.createCourse = async (req:IExtendedRequest, res:Response) => {
     const instituteNumber = req.user?.currentInstituteNumber
    const{coursePrice, courseName, courseDescription, courseDuration, courseLevel} = req.body
   if(!coursePrice || !courseName || !courseDescription || !courseDuration || !courseLevel){
        return res.status(400).json({
            message: "Please fill all the fields"
        })
    }
    const courseThumbnail = null
    await sequelize.query(`INSERT INTO course_${instituteNumber}(courseName, courseDescription, coursePrice, courseDuration, courseLevel, courseThumbnail) VALUES(?,?,?,?,?,?)`, {
        replacements: [courseName, courseDescription, coursePrice, courseDuration, courseLevel, courseThumbnail || '']
    })

    console.log()
}