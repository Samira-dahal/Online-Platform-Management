



import express, { Router } from "express"
import {createCourseTable, createInstitute,createStudentTable,createTeacherTable} from "../../controller/institute/instituteController"
import isLoggedIn from "../../middleware/middleware"
import asyncErrorHandler from "../../services/asyncErrorHandler"
import {multer,storage} from "./../../middleware/multerMiddleware"


const upload = multer({storage : storage})
const router:Router = express.Router()

router.route("/").post((isLoggedIn),upload.single('instotutePhoto'),(createInstitute), (createTeacherTable), (createStudentTable), asyncErrorHandler(createCourseTable))


export default router
