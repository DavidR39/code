import React from 'react'

/* LAYOUT */
import {
    ProfileContainer,
    ProfileImg,
    ProfileName,
    ProfileEmail
} from './style'

/* AUTH0 */
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {

    /* Retrieve UserAuth0 information */
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (<ProfileContainer>
            <ProfileImg src={user.picture} alt={user.name}></ProfileImg>
            <ProfileName>{user.name}</ProfileName>
            <ProfileEmail>{user.email}</ProfileEmail>
        </ProfileContainer>)
    )
}

export default Profile