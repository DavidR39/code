export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        /* GET USER */
        case 'FETCH_USER_BY_EMAIL_REQUEST':
            return {
                loading: true,
                user: {}
            }

        case 'FETCH_USER_BY_EMAIL_SUCCESS':
            return {
                loading: false,
                user: action.payload
            }

        case 'FETCH_USER_BY_EMAIL_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        /* UPDATE PATIENT */
        case 'UPDATE_PATIENT_LIST_REQUEST':
            return {
                loading: true,
                user: {}
            }

        case 'UPDATE_PATIENT_LIST_SUCCESS':
            return {
                loading: false,
                user: action.payload
            }

        case 'UPDATE_PATIENT_LIST_FAIL':
            return {
                loading: false,
                error: action.payload
            }
        
        /* DELETE PATIENT */
        case 'DELETE_PATIENT_REQUEST':
            return {
                loading: true,
                user: {}
            }

        case 'DELETE_PATIENT_SUCCESS':
            return {
                loading: false,
                user: action.payload
            }

        case 'DELETE_PATIENT_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}