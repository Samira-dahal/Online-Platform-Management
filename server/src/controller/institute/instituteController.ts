import { Request, Response } from 'express';
import sequelize from '../../database/connection';
import generateRandomInstituteNumber from '../../services/generateRendomInstitudeNumber';


class InstituteController {
   static async createInstitute(req:Request, res:Response) {
        const {instituteName, instituteEmail, institutePhoneNumber, instituteAddress} = req.body
        const instituteVatNo = req.body.instituteVatNo || null
        const institutePanNo = req.body.institutePanNo || null
        if (!instituteName || !instituteEmail || !institutePhoneNumber || !instituteAddress) {
            res.status(400).json({
                message: "Please provide all required fields: instituteName, instituteEmail, institutePhoneNumber, instituteAddress"
            });
            return;
        }

        const instituteNumber = generateRandomInstituteNumber()
      await sequelize.query(`CREATE TABLE IF NOT EXISTS institute_${instituteNumber}(
            id INT AUTO_INCREMENT PRIMARY KEY,
            instituteName VARCHAR(255) NOT NULL,
            instituteEmail VARCHAR(255) NOT NULL UNIQUE,
            institutePhoneNumber VARCHAR(20) NOT NULL,
            instituteAddress TEXT NOT NULL,
            instituteVatNo VARCHAR(50),
            institutePanNo VARCHAR(50),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`)

        await sequelize.query(`INSERT INTO institute_${instituteNumber} (instituteName, instituteEmail, institutePhoneNumber, instituteAddress, instituteVatNo, institutePanNo) VALUES (?, ?, ?, ?, ?, ?)`, {
            replacements: [instituteName, instituteEmail, institutePhoneNumber, instituteAddress, instituteVatNo, institutePanNo]
        });


        res.status(201).json({
            message: "Institute created successfully",
        });
    }
}

export default InstituteController;