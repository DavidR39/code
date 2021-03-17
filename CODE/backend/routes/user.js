import express from 'express'
import { getUsers, getUserByEmail, updatePatientList, removePatientFromList } from '../controller/userControllers.js'

const router = express.Router()

//@desc     GET user from db
//@route    GET /user
//@access   Public  
router.get('/', getUsers)

//@desc     GET user by email from db
//@route    GET /user/:email
//@access   Public  
router.get('/:email', getUserByEmail)

//@desc     POST user from db
//@route    POST /user
//@access   Public  
router.post('/updatePatient', updatePatientList)

//@desc     POST user from db
//@route    POST /user
//@access   Public  
router.post('/deletePatient', removePatientFromList)

export default router