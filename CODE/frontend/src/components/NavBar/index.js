import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {
    Nav,
    LinksWrapper,
    Logo,
    NavLink
} from './style'
import {
    LogoutButton,
    LoginButton
} from '../Auth';

const NavBar = () => {

    const {isAuthenticated } = useAuth0();

    return (
        <Nav>
            <Logo to='/' >
                    <img src="./logo2.png" alt="Ortho Optimisation" />
                </Logo>
            <LinksWrapper>
                <NavLink to='/dashboard' >DASHBOARD</NavLink>
                { isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </LinksWrapper>
        </Nav>
    )
}

export default NavBar
