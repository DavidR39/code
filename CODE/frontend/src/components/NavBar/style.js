import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.div`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #EEF0ED;
    border-bottom: 1px solid lightgrey;
    box-shadow: 0px 3px 0px 0px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0px 3px 0px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 3px 0px 0px rgba(0,0,0,0.15); 

    display: flex;
    align-items: center;
    justify-content: center;
`



export const LinksWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 30px;
    width: 100%;
    max-width: 1000px;


`

export const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    color: #363635;
    text-decoration: none;
    margin-left: 50px;

    & > img {
        width: 130px;
    }
`

export const NavLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 700;
    color: #363635;
    float: right;
    margin-right: 50px;

    &:after {
        display:block;
        content: '';
        border-bottom: solid 3px #3F84E5;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }

    &:hover:after { transform: scaleX(1); }
`
