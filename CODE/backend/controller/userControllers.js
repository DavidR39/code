import mongoose from 'mongoose'
import User from '../models/user.js'

/* GET ALL USER */
export const getUsers = async (req, res) => {
    try {
        const user = await User.find()

        res.json(user)
    } catch (error) {

        console.error(error)

        res.status(500).json({ message: "Server error" })
    }
}

/* GET USER BY EMAIL */
export const getUserByEmail = async (req, res) => {
    try {

        const user = await User.findOne({ 'email': req.params.email })

        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

/* UPDATE PATIENT LIST */
export const updatePatientList = async (req, res) => {
    try {
        /* retrieve the body request */
        const { userId, newPatient } = req.body

        /* retrieve user in db by using id */
        const user = await User.findOne({ '_id': userId })

        /* verify if the newPatient is really new or is an existing patient */
        const isExisting = user.patients.some((p) => p._id.toString() === newPatient._id.toString())

        // Si le patient existe déjà dans la liste
        if (isExisting) {
            
            // then do a modification of the patient list
            user.patients = user.patients.map((p) => p._id.toString() !== newPatient._id.toString() ? p : newPatient )

        } else {

            // add the new patient into the list    
            user.patients.push({ ...newPatient, _id: new mongoose.Types.ObjectId()})
        }

        /* save the modification */
        user.save()

        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

/* REMOVE PATIENT FROM LIST */
export const removePatientFromList = async (req, res) => {
    try {

        console.log('remove')

        /* retrieve the body request */
        const { userId, patientToDelete } = req.body

        /* retrieve user in db by using id */
        const user = await User.findOne({ '_id': userId })

        /* remove the patient from list */
        user.patients = [...user.patients.filter((p) => p._id.toString() !== patientToDelete.toString())]

        /* save the modification */
        user.save()

        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}