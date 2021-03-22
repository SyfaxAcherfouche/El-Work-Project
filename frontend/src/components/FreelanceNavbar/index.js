import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import cookie from 'react-cookies'
import ProfileMenu from '../ProfileMenu/index'

import { 
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink, 
    Path
} from './FreelanceNavbarElements'

const Navbar = ({ toggle }) => {
    const [nav, setNav] = useState(false) 
    const [token, setToken] = useState(null)
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNav(true)
        } else {
            setNav(false)
        }
    } 
    window.addEventListener('scroll', changeBackground)

    useEffect(() => {
        setToken(cookie.load('token'));
        console.log(token)
    }, [setToken])
    return (
        <>
            <Nav className={ nav ? 'nav active' : 'nav'}>
                <NavBarContainer>
                    <Path to='/' >
                        <NavLogo className={ nav ? 'nav active' : 'nav'}>El Work</NavLogo>
                    </Path>
                    <MobileIcon className={ nav ? 'nav active' : 'nav'} onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='besoin' className={ nav ? 'nav active' : 'nav'}>Les Besoins</NavLinks>
                        </NavItem>
                        <NavItem>
                            <Path to='/freelance'>
                                <NavLinks to='freelance' className={ nav ? 'nav active' : 'nav'}>Nos Freelances</NavLinks>
                            </Path>
                        </NavItem>
                        <NavItem>
                            <Path to='/about'>
                                <NavLinks className={ nav ? 'nav active' : 'nav' }>À propos</NavLinks>
                            </Path>
                        </NavItem>
                        { token === 'undefined' || token === undefined ? <NavItem>
                            <Path to='/login'>
                                <NavLinks className={ nav ? 'nav active' : 'nav' }>Se connecter</NavLinks>
                            </Path>
                        </NavItem> : <div> </div>}
                    </NavMenu>
                    { token === 'undefined' || token === undefined ? <NavBtn>
                        <NavBtnLink to='/register'>
                            S'inscrire
                        </NavBtnLink>
                    </NavBtn> : <ProfileMenu />}   
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default Navbar;

