import axios from 'axios'

const url = 'http://localhost:5000/user'

// 'http://localhost:5000/user/:email'
// Get the user finding by email
export const fetchUserByEmail = (email) => axios.get(`${url}/${email}`)

// 'http://localhost:5000/user/updatePatient'
// Update the patient list (can push or update an element)
export const updatePatientList = (userId, newPatient) => axios.post(`${url}/updatePatient`, {userId: userId , newPatient: newPatient})  

// 'http://localhost:5000/user/deletePatient'
// Remove a patient from the list
export const removePatientFromList = (userId, patientToDelete) => axios.post(`${url}/deletePatient`, {userId: userId , patientToDelete: patientToDelete})