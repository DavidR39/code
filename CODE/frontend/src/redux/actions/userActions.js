import * as api from '../api'

/* GET USER ACTION */
export const getUserByEmail = (email) => async (dispatch) => {
    try {
        dispatch({ type: 'FETCH_USER_BY_EMAIL_REQUEST'})

        const { data } = await api.fetchUserByEmail(email)

        dispatch({ type: 'FETCH_USER_BY_EMAIL_SUCCESS', payload: data})
    } catch (error) {
        console.error(error)
        dispatch({ type: 'FETCH_USER_BY_EMAIL_FAIL', payload: error})
    }
}

/* UPDATE PATIENT LIST */
export const updatePatientList = (userId, newPatient) => async (dispatch) => {
    try {
        dispatch({ type: 'UPDATE_PATIENT_LIST_REQUEST'})

        const { data } = await api.updatePatientList(userId, newPatient)
        
        dispatch({ type: 'UPDATE_PATIENT_LIST_SUCCESS', payload: data})
    } catch (error) {
        console.error(error)
        dispatch({ type: 'UPDATE_PATIENT_LIST_FAIL', payload: error})
    }

}

/* REMOVE PATIENT FROM LIST */
export const removePatientFromList = (userId, patientToDelete) => async (dispatch) => {
    try {
        dispatch({ type: 'DELETE_PATIENT_REQUEST'})

        const { data } = await api.removePatientFromList(userId, patientToDelete)
        
        dispatch({ type: 'DELETE_PATIENT_SUCCESS', payload: data})
    } catch (error) {
        console.error(error)
        dispatch({ type: 'DELETE_PATIENT_FAIL', payload: error})
    }

}