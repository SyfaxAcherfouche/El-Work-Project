import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkN } from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin-top: -80px;
    background: transparent;
    font-size: 1em;
    position: sticky;
    top: 0;
    z-index: 10;

    &.active {
        background-color: #fff;
        -webkit-box-shadow: 0px -1px 23px 6px rgba(204, 204, 204, 0.527); 
        box-shadow: 0px -1px 23px 6px rgba(204, 204, 204, 0.527);
        transition: all 0.5s ease-in-out;
    }
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 0 24px;
    z-index: 1;
`
export const NavLogo = styled.div`
    cursor: pointer;
    font-family: "Dancing Script", cursive;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-self: flex-start;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #27debf;
    }
    &.active {
        color: #000;

        &:hover {
            color: #27debf;
        }
    }
`;
export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 760px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 6px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;

        &.active {
            color: #000;
        }
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`
export const NavItem = styled.div`
    height: 80px;
`
export const NavLinks = styled.li`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        text-decoration: none;
        color: #27debf;
    }
    &.active {
        color: #000;
        &:hover {
        text-decoration: none;
        color: #27debf;
        }
    }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #27DEBF;
    font-size: 16px;
    outline: none;
    border: 1px solid #27DEBF;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        transition: all 0.2s esae-in-out;
        background: #27DEBF;
        color: #fff;
    }
`
export const Path = styled(LinkN)`
    text-decoration: none;
    
    &:hover {
        text-decoration: none;
    }    

`