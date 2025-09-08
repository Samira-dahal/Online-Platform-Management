




import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice'
import teacherSlice from './teacher/teacherSlice'
import instituteSlice from './institute/instituteSlice'
import categorySlice from './institute/category/categorySlice'
import courseSlice from './institute/course/institute-course-slice'
import instituteTeacherSlice from './institute/teacher/institute-teacher-slice'

const store = configureStore({
    reducer : {
        auth : authSlice, 
        teacher : teacherSlice, 
        institute : instituteSlice,
        category : categorySlice, 
        course : courseSlice, 
        instituteTeacher : instituteTeacherSlice
    }
})



export default store 


export type AppDispatch =  typeof store.dispatch 
export type RootState = ReturnType<typeof store.getState> 
