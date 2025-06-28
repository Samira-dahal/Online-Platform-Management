



import express, { Router } from "express"
import {createCourseTable, createInstitute,createStudentTable,createTeacherTable} from "../../controller/institute/instituteController"
import isLoggedIn from "../../middleware/middleware"
import asyncErrorHandler from "../../services/asyncErrorHandler"



const router:Router = express.Router()

router.route("/").post((isLoggedIn),(createInstitute), (createTeacherTable), (createStudentTable), asyncErrorHandler(createCourseTable))


export default router
