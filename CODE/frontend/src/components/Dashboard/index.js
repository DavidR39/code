import React, { useEffect } from 'react'

/* LAYOUT */
import Patients from '../Patients'

/* AUTH0 */
import { useAuth0 } from '@auth0/auth0-react'

/* REDUX */
import { useDispatch, useSelector } from 'react-redux'
import { getUserByEmail } from '../../redux/actions/userActions'
import Loader from '../Loader'



const Dashboard = () => {

    const dispatch = useDispatch();

    /* Retrieve UserStore information */
    const { user: userStore, loading, error } = useSelector((state => state.userState))

    /* Retrieve UserAuth0 information */
    const { user: userAuth, isAuthenticated } = useAuth0();

    /* Dispatching user info */
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUserByEmail(userAuth.email))
        }
    }, [dispatch, isAuthenticated, userAuth])

    return (
        <> { loading ? <Loader /> : (error ? <p>{error}</p> : <Patients patients={userStore.patients} />)} </>
    )
}

export default Dashboard
